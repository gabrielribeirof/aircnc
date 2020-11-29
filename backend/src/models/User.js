const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

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
});

UserSchema.pre('save', async function (next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = mongoose.model('User', UserSchema);
