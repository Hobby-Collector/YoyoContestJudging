var mongoose = require('mongoose');


var divisionSchema = new mongoose.Schema({
    name: {type: String,enum: ['1A','2A','3A','4A','5A']},
    competitors:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  }, {
    timestamps: true
  });

var contestSchema = new mongoose.Schema({
    name: String,
    email: String,
    authorizationKey: String,
    avatar: String,
    competitors: [divisionSchema],
    googleId: String
  }, {
    timestamps: true
  });

module.exports = mongoose.model('contest', contestSchema);