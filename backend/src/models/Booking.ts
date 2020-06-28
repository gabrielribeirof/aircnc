import mongoose from 'mongoose';

export interface IBooking extends mongoose.Document {
  id: mongoose.Schema.Types.ObjectId,
  date: Date,
  approved: boolean,
  user: mongoose.Schema.Types.ObjectId,
  spot: mongoose.Schema.Types.ObjectId
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
