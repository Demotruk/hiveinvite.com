const dhive = require('@hiveio/dhive');

const CUSTOM_JSON_ID = 'swarm_trust';
const BATCH_SIZE = 50;
const POLL_INTERVAL = 3000;

class Indexer {
  constructor(db) {
    this.db = db;
    this.client = new dhive.Client([
      'https://api.hive.blog',
      'https://api.deathwing.me',
      'https://api.openhive.network',
    ]);
    this.running = false;
    this.pollTimer = null;
  }

  async getHeadBlock() {
    const props = await this.client.database.getDynamicGlobalProperties();
    return props.head_block_number;
  }

  async fetchBlocks(start, end) {
    const count = end - start + 1;
    if (count <= 0) return [];
    try {
      const result = await this.client.call('block_api', 'get_block_range', {
        starting_block_num: start,
        count: Math.min(count, BATCH_SIZE),
      });
      return (result.blocks || []).map((block, i) => ({
        ...block,
        block_num: start + i,
      }));
    } catch (err) {
      // Fallback: fetch individually
      const blocks = [];
      for (let n = start; n <= end && n < start + BATCH_SIZE; n++) {
        try {
          const block = await this.client.database.getBlock(n);
          if (block) blocks.push({ ...block, block_num: n });
        } catch { /* skip */ }
      }
      return blocks;
    }
  }

  processBlocks(blocks) {
    let opsFound = 0;
    this.db.transaction(() => {
      for (const block of blocks) {
        const timestamp = block.timestamp;
        const transactions = block.transactions || [];
        for (const tx of transactions) {
          const trxId = tx.transaction_id || '';
          const operations = tx.operations || [];
          for (const op of operations) {
            // dhive may return ops as [type, data] or {type, value}
            let opType, opData;
            if (Array.isArray(op)) {
              [opType, opData] = op;
            } else {
              opType = op.type?.replace(/_operation$/, '');
              opData = op.value;
            }

            if (opType === 'custom_json' && opData.id === CUSTOM_JSON_ID) {
              opsFound += this.processSwarmTrustOp(block.block_num, trxId, timestamp, opData);
            }
          }
        }
      }
      if (blocks.length > 0) {
        this.db.setLastBlock(blocks[blocks.length - 1].block_num);
      }
    });
    return opsFound;
  }

  processSwarmTrustOp(blockNum, trxId, timestamp, opData) {
    let json;
    try {
      json = JSON.parse(opData.json);
    } catch {
      return 0;
    }

    // The posting account is in required_posting_auths
    const accounts = opData.required_posting_auths || [];
    if (accounts.length === 0) return 0;
    const account = accounts[0];

    if (json.trust && typeof json.trust === 'string') {
      this.db.addTrustOp(blockNum, trxId, timestamp, account, json.trust);
      return 1;
    }
    if (json.revoke && typeof json.revoke === 'string') {
      this.db.revokeTrustOp(blockNum, trxId, timestamp, account, json.revoke);
      return 1;
    }
    return 0;
  }

  async catchUp(startBlock) {
    let lastBlock = this.db.getLastBlock();
    if (lastBlock === 0 && startBlock > 0) {
      lastBlock = startBlock - 1;
      this.db.setLastBlock(lastBlock);
    }

    const headBlock = await this.getHeadBlock();
    const totalBlocks = headBlock - lastBlock;
    if (totalBlocks <= 0) {
      console.log('Indexer: already caught up');
      return;
    }

    console.log(`Indexer: catching up ${totalBlocks} blocks (${lastBlock + 1} → ${headBlock})`);
    let processed = 0;
    let totalOps = 0;

    while (lastBlock < headBlock && this.running) {
      const batchStart = lastBlock + 1;
      const batchEnd = Math.min(lastBlock + BATCH_SIZE, headBlock);

      const blocks = await this.fetchBlocks(batchStart, batchEnd);
      if (blocks.length === 0) break;

      const ops = this.processBlocks(blocks);
      totalOps += ops;
      processed += blocks.length;
      lastBlock = this.db.getLastBlock();

      if (processed % 500 === 0 || ops > 0) {
        const pct = ((processed / totalBlocks) * 100).toFixed(1);
        console.log(`Indexer: ${pct}% (block ${lastBlock}, ${totalOps} ops found)`);
      }

      // Throttle to avoid hammering public API
      await new Promise(r => setTimeout(r, 100));
    }

    console.log(`Indexer: catch-up complete. ${totalOps} swarm_trust ops indexed.`);
  }

  startFollowing() {
    console.log('Indexer: following new blocks...');
    this.pollTimer = setInterval(async () => {
      try {
        const headBlock = await this.getHeadBlock();
        const lastBlock = this.db.getLastBlock();
        if (headBlock <= lastBlock) return;

        const blocks = await this.fetchBlocks(lastBlock + 1, headBlock);
        if (blocks.length > 0) {
          const ops = this.processBlocks(blocks);
          if (ops > 0) {
            console.log(`Indexer: block ${headBlock}, ${ops} new swarm_trust op(s)`);
          }
        }
      } catch (err) {
        console.error('Indexer poll error:', err.message);
      }
    }, POLL_INTERVAL);
  }

  async start(startBlock = 0) {
    this.running = true;
    try {
      await this.catchUp(startBlock);
      this.startFollowing();
    } catch (err) {
      console.error('Indexer start error:', err.message);
      // Retry after delay
      setTimeout(() => this.start(startBlock), 10000);
    }
  }

  stop() {
    this.running = false;
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
}

module.exports = { Indexer };
