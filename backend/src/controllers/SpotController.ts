import { Request, Response } from 'express';
import fs from 'fs';

import Spot from '../models/Spot';
import User from '../models/User';

class SpotController {
  async index(request: Request, response: Response) {
    try {
      const spots = await Spot.find().populate('user');

      return response.send(spots);
    } catch (err) {
      return response.status(400).send({ error: 'Error loading spots' });
    }
  }

  async show(request: Request, response: Response) {
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

  async store(request: Request, response: Response) {
    const { user_id } = request.headers;
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
        tags: tags.split(',').map((tag: string) => tag.trim()),
      });

      await user.updateOne({
        $push: {
          spots: spot._id,
        },
      });

      return response.send(spot);
    } catch (err) {
      fs.unlinkSync(request.file.path);
      return response.status(400).send({ error: 'Error creating spot' });
    }
  }

  async delete(request: Request, response: Response) {
    const { spot_id } = request.params;

    try {
      const spot = await Spot.findByIdAndDelete(spot_id);

      if (!spot) {
        return response.status(400).send({ error: 'Spot not Fount' });
      }

      if (request.userID !== spot.user.id) {
        return response.status(400).send({ error: 'Not authorized for this action' });
      }

      fs.unlinkSync(`/${spot.thumbnail}`);

      return response.send(spot);
    } catch (err) {
      return response.status(400).send({ error: 'Error deleting spot' });
    }
  }
}

export default new SpotController();
