var mongoose = require('mongoose');


var scoreSchema = new mongoose.Schema({
  judge:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  score:{
    //not all of these will be filled out by each judge.
    //judges are split into 60% technical 40% performance
    execution: {
      Type: Number,
      min:-1,
      max:10,
      default: NaN
    },
    control: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
    trickDiversity: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
    spaceUse: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
    choreography: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
    construction: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
    bodyControl: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
    showmanship: {
      Type: Number,
      min:-1,
      max:10,
      default: -1
    },
  }

})

var combinedScoreSchema = new mongoose.Schema({
  //these are general
  contest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest'
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('User', combinedScoreSchema );