const fs = require('fs');

const Spot = require('../models/Spot');
const User = require('../models/User');
const File = require('../models/File');

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
<<<<<<< HEAD
    const { originalname: fileoriginalname, filename } = req.file;
=======
    const { originalname: fileoriginalname, filename: filekey } = req.file;
>>>>>>> d0ca9d3fe08e84a4b60d5a133c7b580c95d277da
    const { user_id } = req.headers;

    try {
      const user = await User.findById(user_id);

      if (!user) {
        fs.unlinkSync(req.file.path);
        return res.status(400).send({ error: 'User not found' });
      }

      const file = await File.create({
        name: fileoriginalname,
<<<<<<< HEAD
        key: filename
=======
        key: filekey
>>>>>>> d0ca9d3fe08e84a4b60d5a133c7b580c95d277da
      });

      const spot = await Spot.create({
        user: user_id,
        name,
        price,
        thumbnail: file.id,
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
      const spot = await Spot.findById(spot_id).populate('thumbnail');
<<<<<<< HEAD

      if (req.userID !== spot.user.id)
        return res.status(403).send({ error: 'Not authorized for this action' });
=======
>>>>>>> d0ca9d3fe08e84a4b60d5a133c7b580c95d277da

      if (!spot)
        return res.status(400).send({ error: 'Spot not found' });

      if (req.file) {
        fs.unlinkSync(`/workspace/aircnc/backend/tmp/uploads/${spot.thumbnail.key}`);
        
        await File.findByIdAndDelete(spot.thumbnail.id);
<<<<<<< HEAD

        const { originalname: fileoriginalname, filename } = req.file;

        const newFile = await File.create({
          name: fileoriginalname,
          key: filekey
        });

        await spot.updateOne({
          name,
          price,
          thumbnail: newFile.id,
          tags: tags.split(',').map(tag => tag.trim())
        });
      } else {
        await spot.updateOne({
          name,
          price,
          tags: tags.split(',').map(tag => tag.trim())
        });
      }
=======
      } else {
        const filename = spot.thumbnail.id;
      }

      const { originalname: fileoriginalname, filename: filekey } = req.file;

      const newFile = await File.create({
        name: fileoriginalname,
        key: filekey
      });
      
      await spot.updateOne({
        name,
        price,
        thumbnail: newFile.id,
        tags: tags.split(',').map(tag => tag.trim())
      });
>>>>>>> d0ca9d3fe08e84a4b60d5a133c7b580c95d277da

      return res.send(spot);
    } catch (err) {
      return res.status(400).send({ error: 'Error updating spot' });
    }
  },

  async delete(req, res) {
    const { spot_id } = req.params;

    try {
      const spot = await Spot.findByIdAndDelete(spot_id);

      if (req.userID !== spot.user.id)
        return res.status(403).send({ error: 'Not authorized for this action' });

      fs.unlinkSync(`/workspace/aircnc/backend/tmp/uploads/${spot.thumbnail}`);

      if (!spot)
        return res.status(400).send({ error: 'Spot not found' });

      return res.send(spot);
    } catch (err) {
      return res.status(400).send({ error: 'Error deleting spot' });
    }
  }
}