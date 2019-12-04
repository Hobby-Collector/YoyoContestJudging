var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  //these are general
  contest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest'
  },
  player: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', scoreSchema );