const withTM = require("next-transpile-modules")(["react-markdown"]);

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withTM({
      env: {
        mongodb_username: 'blog-user',
        mongodb_password: 'TeqpgzNz2cgArLRm',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'blog-app-dev'
      },
      webpack5: false
    });
  }

  return withTM({
    env: {
      mongodb_username: 'blog-user',
      mongodb_password: 'TeqpgzNz2cgArLRm',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'blog-app'
    },
    webpack5: false
  });
};
