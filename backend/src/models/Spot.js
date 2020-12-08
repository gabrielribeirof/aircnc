const mongoose = require('mongoose');

const Booking = require('./Booking');

const SpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
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
}, {
  toJSON: {
    virtuals: true,
  },
});

SpotSchema.pre('deleteOne', async function (next) {
  await Booking.deleteMany({
    spot: this._id,
  });

  next();
});

SpotSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'spot',
  justOne: false,
});

SpotSchema.virtual('thumbnail_url').get(function () {
  return `http://192.168.0.106:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
