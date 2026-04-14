const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dhive = require('@hiveio/dhive');

const MAX_GRAPH_DEPTH = 4;
const ACCOUNT_CACHE_TTL = 5 * 60 * 1000;

function createApp(db, indexer) {
  const app = express();

  const allowedOrigins = [
    'https://hiveinvite.com',
    'https://www.hiveinvite.com',
  ];
  if (process.env.NODE_ENV !== 'production') {
    allowedOrigins.push(
      'http://localhost:8080',
      'http://localhost:8000',
      'http://127.0.0.1:8080',
      'http://127.0.0.1:8000',
    );
  }
  app.use(cors({ origin: allowedOrigins }));

  app.use(rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }));

  const hiveClient = new dhive.Client([
    'https://api.hive.blog',
    'https://api.deathwing.me',
    'https://api.openhive.network',
  ]);

  // Account existence cache
  const accountCache = new Map();

  // --- GET /api/trust/declarers ---
  app.get('/api/trust/declarers', (req, res) => {
    const declarers = db.getDeclarers();
    res.json({ declarers, count: declarers.length });
  });

  // --- GET /api/trust/edges ---
  // Returns every active trust edge in one response. Used by consumers that
  // need the full graph rather than paging per-account (e.g. hive-swarm-post).
  app.get('/api/trust/edges', (req, res) => {
    const declarers = db.getDeclarers();
    const batch = db.getTrustedBatch(declarers);
    const edges = [];
    for (const [truster, trustees] of batch) {
      for (const trustee of trustees) {
        edges.push({ truster, trustee });
      }
    }
    res.json({
      edges,
      count: edges.length,
      last_indexed_block: db.getLastBlock(),
    });
  });

  // --- GET /api/trust/:account ---
  app.get('/api/trust/:account', (req, res) => {
    const account = req.params.account.toLowerCase().replace('@', '');
    const trusts = db.getTrusted(account);
    res.json({ account, trusts, count: trusts.length });
  });

  // --- GET /api/trust/:account/graph?depth=3 ---
  app.get('/api/trust/:account/graph', (req, res) => {
    const root = req.params.account.toLowerCase().replace('@', '');
    const depth = Math.min(parseInt(req.query.depth) || 3, MAX_GRAPH_DEPTH);

    const nodes = new Set([root]);
    const edges = [];
    const depthMap = { [root]: 0 };

    let currentLevel = [root];

    for (let d = 0; d < depth; d++) {
      if (currentLevel.length === 0) break;
      const batchResult = db.getTrustedBatch(currentLevel);
      const nextLevel = [];

      for (const [truster, trustees] of batchResult) {
        for (const trustee of trustees) {
          edges.push({ source: truster, target: trustee });
          if (!nodes.has(trustee)) {
            nodes.add(trustee);
            depthMap[trustee] = d + 1;
            nextLevel.push(trustee);
          }
        }
      }
      currentLevel = nextLevel;
    }

    res.json({
      root,
      depth,
      nodes: [...nodes],
      edges,
      depth_map: depthMap,
    });
  });

  // --- GET /api/trust/:from/paths/:to?depth=3 ---
  app.get('/api/trust/:from/paths/:to', (req, res) => {
    const from = req.params.from.toLowerCase().replace('@', '');
    const to = req.params.to.toLowerCase().replace('@', '');
    const maxDepth = Math.min(parseInt(req.query.depth) || 3, MAX_GRAPH_DEPTH);

    // Build the adjacency map via BFS from 'from'
    const adjacency = new Map();
    const visited = new Set([from]);
    let currentLevel = [from];

    for (let d = 0; d < maxDepth; d++) {
      if (currentLevel.length === 0) break;
      const batchResult = db.getTrustedBatch(currentLevel);
      const nextLevel = [];

      for (const [truster, trustees] of batchResult) {
        adjacency.set(truster, trustees);
        for (const trustee of trustees) {
          if (!visited.has(trustee)) {
            visited.add(trustee);
            nextLevel.push(trustee);
          }
        }
      }
      currentLevel = nextLevel;

      // Early exit if target found
      if (visited.has(to)) {
        // Finish this level for completeness (find all paths at this depth)
        const remaining = currentLevel.filter(a => !adjacency.has(a));
        if (remaining.length > 0) {
          const moreResults = db.getTrustedBatch(remaining);
          for (const [truster, trustees] of moreResults) {
            adjacency.set(truster, trustees);
          }
        }
        break;
      }
    }

    if (!visited.has(to)) {
      return res.json({ from, to, paths: [], depth: maxDepth });
    }

    // DFS to find all paths
    const paths = [];
    function dfs(current, path) {
      if (current === to) {
        paths.push([...path]);
        return;
      }
      if (path.length > maxDepth) return;
      const neighbors = adjacency.get(current) || [];
      for (const next of neighbors) {
        if (!path.includes(next)) {
          path.push(next);
          dfs(next, path);
          path.pop();
        }
      }
    }
    dfs(from, [from]);

    res.json({ from, to, paths, depth: maxDepth });
  });

  // --- GET /api/account/:account/exists ---
  app.get('/api/account/:account/exists', async (req, res) => {
    const account = req.params.account.toLowerCase().replace('@', '');

    const cached = accountCache.get(account);
    if (cached && Date.now() - cached.time < ACCOUNT_CACHE_TTL) {
      return res.json({ account, exists: cached.exists });
    }

    try {
      const accounts = await hiveClient.database.getAccounts([account]);
      const exists = accounts && accounts.length > 0;
      accountCache.set(account, { exists, time: Date.now() });
      res.json({ account, exists });
    } catch (err) {
      res.status(502).json({ error: 'Failed to check account', message: err.message });
    }
  });

  // --- GET /api/status ---
  app.get('/api/status', async (req, res) => {
    try {
      const lastBlock = db.getLastBlock();
      const stats = db.getStats();
      let headBlock = lastBlock;
      try {
        headBlock = await indexer.getHeadBlock();
      } catch { /* use lastBlock */ }

      res.json({
        last_indexed_block: lastBlock,
        head_block: headBlock,
        blocks_behind: headBlock - lastBlock,
        total_trust_edges: stats.totalEdges,
        total_accounts: stats.totalAccounts,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return app;
}

module.exports = { createApp };
