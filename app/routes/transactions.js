var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Transaction = require('../models/transaction');
var moment = require('moment');

var jsonParser = bodyParser.json()

/* GET users listing. */
router.get('/', function(req, res, next) {

  Transaction.find(function(err, transactions) {
    if (err) return res.send(err);
    console.log(transactions);
    console.log('here');
    res.json(transactions);
  });
});

router.get('/getweek', function(req, res, next) {
  //TODO: need to authenticate account first.
  date = req.body.date
  var format = "YYYY-MM-DD"

  var startWeek = moment(date, format).startOf('week');
  var endWeek = moment(date, format).endOf('week'); 

  var weeklyTrans = Transaction.find({date: { $gte: startWeek.toDate(), $lte: endWeek.toDate() }}, function(err, trans) {
    if (err) return 'error';
    console.log(trans);
    res.json(trans);
  });
});

router.post('/new', function(req, res, next) {
  //TODO: need to authenticate account first.
  console.log(req.params);
  newTrans = new Transaction();
  newTrans.amount = req.body.amount;
  newTrans.date = req.body.date;
  newTrans.category = req.body.category;
  newTrans.description = req.body.description;
  newTrans.location = req.body.location;
  res.end();
});

router.post('/edit', function(req, res, next) {
  var updateObject = {}
  updateObject.amount = req.body.amount;
  updateObject.date = req.body.date;
  updateObject.category = req.body.date;
  updateObject.description = req.body.description;
  updateObject.location = req.body.location;

  Transaction.findOneAndUpdate({ id: req.body._id}, update, function(err, doc) {
    if (err) return 'do something';
  });

});


module.exports = router;
