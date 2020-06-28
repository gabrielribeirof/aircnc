import { Express, Request } from 'express';
import mongoose from 'mongoose';

declare global {
  namespace Express {
    export interface Request {
      userID: mongoose.Schema.Types.ObjectId
    }
  }
}
