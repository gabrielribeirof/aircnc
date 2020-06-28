import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

export interface IUser extends mongoose.Document {
  id: mongoose.Schema.Types.ObjectId,
  name: string,
  email: string,
  password: string,
}

const UserSchema = new mongoose.Schema<IUser>({
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
}, {
  timestamps: true,
});

// eslint-disable-next-line func-names
UserSchema.pre<IUser>('save', async function (next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;

  next();
});

export default mongoose.model<IUser>('User', UserSchema);
