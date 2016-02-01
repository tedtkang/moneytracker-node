'use strict';

// Test specific configuration
// TODO: Need to actually set these values.
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/moneytracker-test'
  },

  // Not sure wtf this is yet.
  // TODO: Figure out wtf this is.
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};
