import { Request, Response } from 'express';
import { generateToken } from '../config/jsonwebtoken';

import User from '../models/User';

class UserController {
  async index(request: Request, response: Response) {
    try {
      const users = await User.find().populate('spots');

      return response.send(users);
    } catch (err) {
      return response.status(400).send({ error: 'Error loading users' });
    }
  }

  async show(request: Request, response: Response) {
    const { user_id } = request.params;

    try {
      const user = await User.findById(user_id);

      if (!user) {
        return response.status(400).send({ error: 'User not found' });
      }

      return response.send(user);
    } catch (err) {
      return response.status(400).send({ error: 'Error finding user' });
    }
  }

  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      if (await User.findOne({ name })) {
        return response.status(400).send({ error: 'Name already exists' });
      }

      if (await User.findOne({ email })) {
        return response.status(400).send({ error: 'Email already exists' });
      }

      const user = await User.create({ name, email, password });

      user.password = undefined;

      return response.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (err) {
      return response.status(400).send({ error: 'Error adding user' });
    }
  }

  async delete(request: Request, response: Response) {
    const { user_id } = request.params;

    try {
      if (request.userID !== user_id) {
        return response.status(400).send({ error: 'Not authorized for this action' });
      }

      const user = await User.findByIdAndDelete(user_id);

      if (!user) {
        return response.status(400).send({ error: 'User not found' });
      }

      return response.send(user);
    } catch (err) {
      return response.status(400).send({ error: 'Error deleting user' });
    }
  }
}

export default new UserController();
