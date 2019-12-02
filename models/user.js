var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  authorizationKey: String,
  avatar: String,
  contests: [contestSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);