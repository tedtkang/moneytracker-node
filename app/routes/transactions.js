var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Transaction = require('../models/transaction');

var jsonParser = bodyParser.json()

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*
  test = new Transaction();
  test.amount = 53.43
  test.date = new Date();
  test.category = 'test category';
  test.description = 'test description';
  test.location = 'test location';
  test.save();
  console.log(test);
  res.json(test);
  */
  Transaction.find(function(err, transactions) {
    if (err) return res.send(err);
    res.json(transactions);
  });
});

router.post('/new', jsonParser, function(req, res, next) {
  console.log(req.params);
  console.log(req.body.test);
  res.send(req.body);
});

module.exports = router;
