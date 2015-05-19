var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
  amount: Number,
  date: Date,
  category: String,
  description: String,
  location: String
})

transactionSchema.methods.findWeeklyTransactions = function(date) {
  
  

};

var transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;