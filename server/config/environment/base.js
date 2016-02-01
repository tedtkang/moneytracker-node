'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// Base configuartion.  All other configs (dev, prod, test) will
// include these options.

var base = {
  env: process.env.NODE_ENV,

  // root bath (parent of server, client, ...)
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 3000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  base,
  require('./shared'),
  require('./' + process.env.NODE_ENV + '.js') || {});
