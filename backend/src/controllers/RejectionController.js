const Booking = require('../models/Booking');

class RejectionController {
  async store(request, response) {
    const { booking_id } = request.params;

    try {
      const booking = await Booking.findById(booking_id).populate('spot');

      if (!booking) {
        return response.status(400).send({ error: 'Booking not found' });
      }

      booking.approved = false;
      await booking.save();

      return response.send(booking);
    } catch (err) {
      return response.status(400).send({ error: 'Error rejecting booking' });
    }
  }
}

module.exports = new RejectionController();
