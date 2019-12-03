var mongoose = require('mongoose');

var divisionSchema = new mongoose.Schema({
  name: { type: String, enum: ['1A', '2A', '3A', '4A', '5A','Judges'] },
}, {
  timestamps: true
});

var contestSchema = new mongoose.Schema({
  name: String,
  date: Date,
  divisions: [divisionSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Contest', contestSchema);