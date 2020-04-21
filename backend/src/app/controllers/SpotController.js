const fs = require('fs');

const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const spots = await Spot.find().populate('user');

      return res.send(spots);
    } catch (err) {
      return res.status(400).send({ error: 'Error loading spots' });
    }
  },

  async show(req, res) {
    const { spot_id } = req.params;

    try {
      const spot = await Spot.findById(spot_id);

      if (!spot)
        return res.status(400).send({ error: 'Spot not found' });

      return res.send(spot);
    } catch (err) {
      return res.status(400).send({ error: 'Error finding spot' });
    }
  },

  async store(req, res) {
    const { name, price, tags } = req.body;
    const { user_id } = req.headers;

    try {
      const user = await User.findById(user_id);

      if (!user) {
        fs.unlinkSync(req.file.path);
        return res.status(400).send({ error: 'User not found' });
      }
      
      const { filename } = req.file;

      const spot = await Spot.create({
        user: user_id,
        name,
        price,
        thumbnail: filename,
        tags: tags.split(',').map(tag => tag.trim())
      });

      await user.updateOne({
        $push: {
          spots: spot._id
        }
      });

      return res.send(spot);
    } catch (err) {
      fs.unlinkSync(req.file.path);
      return res.status(400).send({ error: 'Error creating spot' });
    }
  },

  async update(req, res) {
    const { name, price, tags } = req.body;
    const { spot_id } = req.params;

    try {
      const spot = await Spot.findById(spot_id);

      if (!spot)
        return res.status(400).send({ error: 'Spot not found' });

      if (req.file) {
        fs.unlinkSync(`/workspace/aircnc/backend/tmp/uploads/${spot.thumbnail}`);
        const { filename } = req.file;
      } else {
        const filename = spot.thumbnail;
      }
      
      await spot.updateOne({
        name,
        price,
        thumbnail: filename,
        tags: tags.split(',').map(tag => tag.trim())
      });

      return res.send(spot);
    } catch (err) {
      return res.status(400).send({ error: 'Error updating spot' });
    }
  },

  async delete(req, res) {
    const { spot_id } = req.params;

    try {
      const spot = await Spot.findByIdAndDelete(spot_id);

      fs.unlinkSync(`/workspace/aircnc/backend/tmp/uploads/${spot.thumbnail}`);

      if (!spot)
        return res.status(400).send({ error: 'Spot not found' });

      return res.send(spot);
    } catch (err) {
      return res.status(400).send({ error: 'Error deleting spot' });
    }
  }
}