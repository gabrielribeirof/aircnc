import mongoose from 'mongoose';

import { IUser } from './User';
import { ISpot } from './Spot';

export interface IBooking extends mongoose.Document {
  id: mongoose.Schema.Types.ObjectId,
  date: Date,
  approved: boolean,
  user: IUser,
  spot: ISpot
}

const BookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  approved: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true,
  },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);
