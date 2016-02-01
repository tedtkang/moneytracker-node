'use strict';

// Production specific configuration
// TODO:  Need to actually set these values.
module.exports = {
  // Server IP
  ip:     process.env.IP ||
          undefined,

  // Server port
  port:   process.env.PORT ||
          8080,

  // MongoDB connection options
  mongo: {
    uri:  process.env.MONGOLAB_URI ||
          process.env.MONGOHQ_URL ||
          'mongodb://localhost/test'
  }
};
