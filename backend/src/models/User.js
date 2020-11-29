const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Spot = require('./Spot');
const Booking = require('./Booking');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  spots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true,
  }],
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true,
  }],
});

UserSchema.pre('save', async function (next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;

  next();
});

UserSchema.pre('remove', function (next) {
  Spot.remove({ user: this._id });
  Booking.remove({ user: this._id });

  next();
});

module.exports = mongoose.model('User', UserSchema);
