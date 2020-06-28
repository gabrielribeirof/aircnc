import { Request, Response } from 'express';

import Booking from '../models/Booking';

class ApprovalController {
  async store(request: Request, response: Response) {
    const { booking_id } = request.params;

    try {
      const booking = await Booking.findById(booking_id).populate('spot');

      if (!booking) {
        return response.status(400).send({ error: 'Booking not found' });
      }

      booking.approved = true;
      await booking.save();

      return response.send(booking);
    } catch (err) {
      return response.status(400).send({ error: 'Error approving booking' });
    }
  }
}

export default new ApprovalController();
