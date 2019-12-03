var mongoose = require('mongoose');

var divisionSchema = new mongoose.Schema({
    name: {type: String,enum: ['1A','2A','3A','4A','5A']},
    competitors:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
  }, {
    timestamps: true
  });

var contestSchema = new mongoose.Schema({
    URL:{type:String},
    name: String,
    email: String,
    authorizationKey: String,
    avatar: String,
    divisions: [divisionSchema],
    googleId: String
  }, {
    timestamps: true
  });

module.exports = mongoose.model('contest', contestSchema);