require('dotenv').config();
const path = require('path');
const { initDb } = require('./db');
const { Indexer } = require('./indexer');
const { createApp } = require('./api');

const PORT = parseInt(process.env.PORT || '3000', 10);
const START_BLOCK = parseInt(process.env.START_BLOCK || '0', 10);
const DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', 'data', 'swarm_trust.db');

console.log(`Starting swarm-trust-indexer...`);
console.log(`  Database: ${DB_PATH}`);
console.log(`  Port: ${PORT}`);
console.log(`  Start block: ${START_BLOCK || '(from last checkpoint)'}`);

const db = initDb(DB_PATH);
const indexer = new Indexer(db);
const app = createApp(db, indexer);

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
  indexer.start(START_BLOCK);
});

process.on('SIGINT', () => {
  console.log('\nShutting down...');
  indexer.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  indexer.stop();
  process.exit(0);
});
