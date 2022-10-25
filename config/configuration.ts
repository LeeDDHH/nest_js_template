'use strict';

const configuration = () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  server: {
    port: parseInt(process.env.PORT) || 3000,
    hostName: process.env.hostname || 'localhost',
  },
});

export { configuration };
