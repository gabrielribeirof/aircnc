const Booking = require('../models/Booking');
const User = require('../models/User');
const Spot = require('../models/Spot');

class BookingController {
  async index(request, response) {
    const user_id = request.userID;
    const { status } = request.query;

    try {
      const bookings = await Booking.find({
        status,
      }).populate('user').populate('spot');

      if (!bookings.length > 0) {
        return response.send(bookings);
      }

      const bookingsAtUserSpots = bookings.filter((booking) => (
        String(booking.spot.user) === user_id
      ));

      return response.send(bookingsAtUserSpots);
    } catch (err) {
      return response.status(400).send({ error: 'Error loading bookings' });
    }
  }

  async store(request, response) {
    const user_id = request.userID;
    const { date, spot } = request.body;

    try {
      if (!await User.findById(user_id)) {
        return response.status(400).send({ error: 'User not found' });
      }

      if (!await Spot.findById(spot)) {
        return response.status(400).send({ error: 'Spot not found' });
      }

      const nativeDate = new Date(date);

      if (!Object.prototype.toString.call(nativeDate) === '[object Date]') {
        return response.status(400).send({ error: 'Poorly formatted date' });
      }

      const booking = await Booking.create({
        date: nativeDate,
        approved: false,
        user: user_id,
        spot,
      });

      return response.send(booking);
    } catch (err) {
      return response.status(400).send({ error: 'Error adding booking' });
    }
  }

  async delete(request, response) {
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

module.exports = new BookingController();
