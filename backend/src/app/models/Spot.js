const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    require: true
  },
  thumbnail: String,
  tags: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Spot', SpotSchema);