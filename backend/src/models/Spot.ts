import mongoose from 'mongoose';

import { IUser } from './User';

export interface ISpot extends mongoose.Document {
  id: mongoose.Schema.Types.ObjectId,
  name: string,
  price: string,
  thumbnail: string,
  tags: [string],
  user: IUser
}

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
}, {
  timestamps: true,
});

export default mongoose.model<ISpot>('Spot', SpotSchema);
