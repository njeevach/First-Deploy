const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'jeeva',
        mongodb_password: 'Jeeva',
        mongodb_clustername: 'jeevadb.d5u2lle',
        mongodb_database: 'JeevaDB-site', // Development DB
      },
    };
  }

  return {
    env: {
      mongodb_username: 'jeeva',
      mongodb_password: 'Jeeva',
      mongodb_clustername: 'jeevadb.d5u2lle',
      mongodb_database: 'JeevaDB', // Production DB
    },
  };
};
