const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { booking_id } = req.params;

    try {
      const booking = await Booking.findById(booking_id).populate('spot');

      if (!booking)
        return res.status(400).send({ error: 'Booking not found' });

      booking.approved = true;
      await booking.save();

      return res.send(booking);
    } catch (err) {
      return res.status(400).send({ error: 'Error approving booking' });
    }
  }
};