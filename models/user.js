var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  //these are general
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  authorizationKey: {
    type:Boolean,
    default:false
  },
  contests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contest'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);