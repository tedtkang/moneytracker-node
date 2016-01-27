var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('test test');
  res.render('index', { title: 'Express' });
  //res.sendFile('../../views/index.html', { root: __dirname });
});

module.exports = router;
