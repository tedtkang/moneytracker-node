var mongoose = require('mongoose');
var moment = require('moment');

var transactionSchema = mongoose.Schema({
  uid: Number,
  amount: Number,
  date: Date,
  category: String,
  description: String,
  location: String
})


// Move this logic into the routes file.
transactionSchema.statics.findWeeklyTransactions = function(date) {
  var startWeek = moment(date).startOf('week');
  var endWeek = moment(date).endOf('week');


  
  return [startWeek, endWeek];

  

};

var transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;