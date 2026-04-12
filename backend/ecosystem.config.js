module.exports = {
  apps: [{
    name: 'swarm-trust',
    script: 'src/index.js',
    instances: 1,
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      START_BLOCK: 92000000,
    },
  }],
};
