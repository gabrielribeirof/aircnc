const Booking = require('../models/Booking');
const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
  async index(req, res) {
    try {
      const bookings = await Booking.find();

      return res.send(bookings);
    } catch (err) {
      return res.status(400).send({ error: 'Error loading bookings' });
    }
  },

  async show(req, res) {
    const { booking_id } = req.params;

    try {
      const booking = await Booking.findById(booking_id);

      if (!booking)
        return res.status(400).send({ error: 'Booking not found' });

      return res.send(booking);
    } catch (err) {
      return res.status(400).send({ error: 'Error finding booking' });
    }
  },

  async store(req, res) {
    const { date, user, spot } = req.body;

    try {
      if (!await User.findById(user))
        return res.status(400).send({ error: 'User not found' });

      if (!await Spot.findById(spot))
        return res.status(400).send({ error: 'Spot not found' });
      
      const dateArray = date.split('-');

      dateArray[0].length === 4;
      dateArray[1].length === 2;
      dateArray[2].length === 2;

      if (dateArray[0] < new Date().getUTCFullYear())
        return res.status(400).send({ error: 'Poorly formatted date' });

      const nativeDate = new Date(dateArray[0], dateArray[1], dateArray[2]);

      const booking = await Booking.create({
        date: nativeDate,
        user,
        spot
      });

      return res.send(booking);
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Error adding booking' });
    }
  },

  async delete(req, res) {
    const { booking_id } = req.params;

    try {
      const booking = await Booking.findByIdAndDelete(booking_id);

      if (!booking)
        return res.status(400).send({ error: 'Booking not found' });

      return res.send(booking);
    } catch (err) {
      return res.status(400).send({ error: 'Error deleting booking' });
    }
  }
}