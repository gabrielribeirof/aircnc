const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  spots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true
  }],
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);