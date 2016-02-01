// Testing our mongoose database.

var mongoose = require('mongoose');

function connect(connectionString, connectionOptions) {
  mongoose.connect(connectionString, connectionOptions);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('Mongoose connected at: ' + connectionString);
    console.log('Connnection options: ' + JSON.stringify(connectionOptions));
  });
}

module.exports = connect;
