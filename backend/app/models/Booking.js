const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  approved: {
    type: Boolean,
    required: true,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true
  }
});

module.exports = mongoose.model('Booking', BookingSchema);