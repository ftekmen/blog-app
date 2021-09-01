const withTM = require("next-transpile-modules")(["react-markdown"]);
module.exports = withTM({
  env: {
    mongodb_username: 'blog-user',
    mongodb_password: 'YrjrUP68QMvpx7zp',
    mongodb_cluster: 'cluster0',
    mongodb_database: 'blog-app'
  },
  webpack5: false
});
