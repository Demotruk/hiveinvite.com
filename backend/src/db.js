const Database = require('better-sqlite3');
const path = require('path');

function initDb(dbPath) {
  const db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  db.exec(`
    CREATE TABLE IF NOT EXISTS indexer_state (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS trust_ops (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      block_num INTEGER NOT NULL,
      trx_id TEXT NOT NULL,
      timestamp TEXT NOT NULL,
      account TEXT NOT NULL,
      target TEXT NOT NULL,
      op_type TEXT NOT NULL CHECK(op_type IN ('trust', 'revoke')),
      UNIQUE(trx_id, account, target)
    );

    CREATE TABLE IF NOT EXISTS trust_edges (
      truster TEXT NOT NULL,
      trustee TEXT NOT NULL,
      since_block INTEGER NOT NULL,
      since_timestamp TEXT NOT NULL,
      PRIMARY KEY (truster, trustee)
    );

    CREATE INDEX IF NOT EXISTS idx_trust_ops_account ON trust_ops(account);
    CREATE INDEX IF NOT EXISTS idx_trust_ops_block ON trust_ops(block_num);
    CREATE INDEX IF NOT EXISTS idx_trust_edges_truster ON trust_edges(truster);
    CREATE INDEX IF NOT EXISTS idx_trust_edges_trustee ON trust_edges(trustee);
  `);

  // Prepare statements
  const stmts = {
    getState: db.prepare('SELECT value FROM indexer_state WHERE key = ?'),
    setState: db.prepare('INSERT OR REPLACE INTO indexer_state (key, value) VALUES (?, ?)'),

    insertOp: db.prepare(`
      INSERT OR IGNORE INTO trust_ops (block_num, trx_id, timestamp, account, target, op_type)
      VALUES (?, ?, ?, ?, ?, ?)
    `),
    addEdge: db.prepare(`
      INSERT OR IGNORE INTO trust_edges (truster, trustee, since_block, since_timestamp)
      VALUES (?, ?, ?, ?)
    `),
    removeEdge: db.prepare('DELETE FROM trust_edges WHERE truster = ? AND trustee = ?'),

    getTrusted: db.prepare('SELECT trustee FROM trust_edges WHERE truster = ?'),
    getTrustedBatch: null, // built dynamically per query
    getTotalEdges: db.prepare('SELECT COUNT(*) as count FROM trust_edges'),
    getTotalAccounts: db.prepare(`
      SELECT COUNT(DISTINCT account) as count FROM (
        SELECT truster as account FROM trust_edges
        UNION
        SELECT trustee as account FROM trust_edges
      )
    `),
  };

  return {
    raw: db,

    getLastBlock() {
      const row = stmts.getState.get('last_block');
      return row ? parseInt(row.value, 10) : 0;
    },

    setLastBlock(blockNum) {
      stmts.setState.run('last_block', String(blockNum));
    },

    addTrustOp(blockNum, trxId, timestamp, account, target) {
      stmts.insertOp.run(blockNum, trxId, timestamp, account, target, 'trust');
      stmts.addEdge.run(account, target, blockNum, timestamp);
    },

    revokeTrustOp(blockNum, trxId, timestamp, account, target) {
      stmts.insertOp.run(blockNum, trxId, timestamp, account, target, 'revoke');
      stmts.removeEdge.run(account, target);
    },

    getTrusted(account) {
      return stmts.getTrusted.all(account).map(r => r.trustee);
    },

    getTrustedBatch(accounts) {
      if (accounts.length === 0) return new Map();
      const placeholders = accounts.map(() => '?').join(',');
      const rows = db.prepare(
        `SELECT truster, trustee FROM trust_edges WHERE truster IN (${placeholders})`
      ).all(...accounts);
      const result = new Map();
      for (const account of accounts) result.set(account, []);
      for (const row of rows) {
        result.get(row.truster).push(row.trustee);
      }
      return result;
    },

    getStats() {
      return {
        totalEdges: stmts.getTotalEdges.get().count,
        totalAccounts: stmts.getTotalAccounts.get().count,
      };
    },

    transaction(fn) {
      return db.transaction(fn)();
    },
  };
}

module.exports = { initDb };
