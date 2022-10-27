module.exports = {
  apps: [{
    name: 'RPC',
    script: 'main.js',
    args: '',
    interpreter: '/home/ubuntu/xrun-admin-rpc/node_modules/.bin/babel-node',
    autorestart: true,
    watch: false,
    max_restarts: '1000'
  }]
};
