import { Request, Response } from 'express';

import Booking from '../models/Booking';
import User from '../models/User';
import Spot from '../models/Spot';

class BookingController {
  async index(request: Request, response: Response) {
    try {
      const bookings = await Booking.find();

      return response.send(bookings);
    } catch (err) {
      return response.status(400).send({ error: 'Error loading bookings' });
    }
  }

  async show(request: Request, response: Response) {
    const { booking_id } = request.params;

    try {
      const booking = await Booking.findById(booking_id);

      if (!booking) {
        return response.status(400).send({ error: 'Booking not found' });
      }

      return response.send(booking);
    } catch (err) {
      return response.status(400).send({ error: 'Error finding booking' });
    }
  }

  async store(request: Request, response: Response) {
    const user = request.userID;
    const { date, spot } = request.body;

    try {
      if (!await User.findById(user)) {
        return response.status(400).send({ error: 'User not found' });
      }

      if (!await Spot.findById(spot)) {
        return response.status(400).send({ error: 'Spot not found' });
      }

      const nativeDate = new Date(date);

      if (Object.prototype.toString.call(nativeDate) === '[object Date]') {
        return response.status(400).send({ error: 'Poorly formatted date' });
      }

      const booking = await Booking.create({
        date: nativeDate,
        approved: false,
        user,
        spot,
      });

      return response.send(booking);
    } catch (err) {
      return response.status(400).send({ error: 'Error adding booking' });
    }
  }

  async delete(request: Request, response: Response) {
    const { booking_id } = request.params;

    try {
      const booking = await Booking.findByIdAndDelete(booking_id);

      if (!booking) {
        return response.status(400).send({ error: 'Booking not found' });
      }

      return response.send(booking);
    } catch (err) {
      return response.status(400).send({ error: 'Error deleting booking' });
    }
  }
}

export default new BookingController();
