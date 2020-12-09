const fs = require('fs');
const path = require('path');

const Spot = require('../models/Spot');
const User = require('../models/User');

class SpotController {
  async index(request, response) {
    try {
      const spots = await Spot.find().populate('user');

      return response.send(spots);
    } catch (err) {
      return response.status(400).send({ error: 'Error loading spots' });
    }
  }

  async show(request, response) {
    const { spot_id } = request.params;

    try {
      const spot = await Spot.findById(spot_id);

      if (!spot) {
        return response.status(400).send({ error: 'Spot not found' });
      }

      return response.send(spot);
    } catch (err) {
      return response.status(400).send({ error: 'Error finding spot' });
    }
  }

  async store(request, response) {
    const user_id = request.userID;
    const { name, price, tags } = request.body;
    const { filename } = request.file;

    try {
      const user = await User.findById(user_id);

      if (!user) {
        fs.unlinkSync(request.file.path);
        return response.status(400).send({ error: 'User not found' });
      }

      const spot = await Spot.create({
        user: user_id,
        name,
        price,
        thumbnail: filename,
        tags: tags.split(',').map((tag) => tag.trim()),
      });

      return response.send(spot);
    } catch (err) {
      fs.unlinkSync(request.file.path);
      return response.status(400).send({ error: 'Error creating spot' });
    }
  }

  async delete(request, response) {
    const { spot_id } = request.params;

    try {
      const spot = await Spot.findById(spot_id);

      if (!spot) {
        return response.status(400).send({ error: 'Spot not found' });
      }

      if (String(request.userID) !== String(spot.user)) {
        return response.status(400).send({ error: 'Not authorized for this action' });
      }

      spot.deleteOne();

      fs.unlinkSync(path.resolve(__dirname, '..', '..', 'uploads', spot.thumbnail));

      return response.send(spot);
    } catch (err) {
      return response.status(400).send({ error: 'Error deleting spot' });
    }
  }
}

module.exports = new SpotController();
