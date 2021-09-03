const withTM = require("next-transpile-modules")(["react-markdown"]);

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withTM({
      env: {
        mongodb_username: 'sample-dev-user',
        mongodb_password: 'sample-dev-pass',
        mongodb_cluster: 'sample-dev-cluster',
        mongodb_database: 'sample-dev-db'
      },
      webpack5: false
    });
  }

  return withTM({
    env: {
      mongodb_username: 'sample-user',
      mongodb_password: 'sample-pass',
      mongodb_cluster: 'sample-cluster',
      mongodb_database: 'sample-db'
    },
    webpack5: false
  });
};
