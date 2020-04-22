const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  password: {
    type: String,
    required: true,
    select: false,
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

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = mongoose.model('User', UserSchema);