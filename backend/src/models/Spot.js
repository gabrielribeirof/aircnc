const mongoose = require('mongoose');

const Booking = require('./Booking');

const SpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  tags: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

SpotSchema.pre('remove', function (next) {
  Booking.remove({
    user: this.user,
  });

  next();
});

module.exports = mongoose.model('Spot', SpotSchema);
