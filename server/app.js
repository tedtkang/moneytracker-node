var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

// Get the config object.
var config = require('./config/environment/base');

console.log('confg is ' + JSON.stringify(config));

var app = express();

app.set('appPath', path.join(config.root, 'client'));

/**
 * View Engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


/**
 * Express settings
 */

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
//app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(app.get('appPath'), 'public')));
console.log('bower path is ' + path.join(app.get('appPath'), 'bower_components'));
app.use('/bower_components',  express.static(path.join(app.get('appPath'), 'bower_components')));

/**
 * Setting up routes
 * TODO: Might want to oranize routes/models by resources rather than separately
 * TODO: Make one consolidated routes file.
 */
var routes = require('./app/routes/index');
var users = require('./app/routes/users');
var transactions = require('./app/routes/transactions');
app.use('/', routes);
app.use('/users', users);
app.use('/transactions', transactions);


/**
 *  Set up the database
 */

console.log('process.env.database_url is: ' + process.env.DATABASE_URL);
var db = require('./config/database')(config.mongo.uri, config.mongo.options);
app.set('db', db);
// Populate databases with sample data
// TODO: Make seed file for testing
//if (config.seedDB) { require('./config/seed'); }

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// Can do stuff for production and test here by checking app.get('env')

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
