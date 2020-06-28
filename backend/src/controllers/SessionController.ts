import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';

import { generateToken } from '../config/jsonwebtoken';

import User from '../models/User';

class SessionController {
  async show(request: Request, response: Response) {
    const { authorization } = request.headers;

    try {
      if (!authorization) {
        return response.status(400).json({ error: 'Credentials not provided' });
      }

      const parts = authorization.split(' ');
      const [scheme, hash] = parts;

      if (parts.length !== 2) {
        return response.status(401).send({ error: 'Login error' });
      }

      if (!/^Basic$/i.test(scheme)) {
        return response.status(401).send({ error: 'Login malformatted' });
      }

      const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return response.status(400).send({ error: 'User not found' });
      }

      if (!await bcryptjs.compare(password, user.password)) {
        return response.status(400).send({ error: 'Invalid password' });
      }

      user.password = undefined;

      return response.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (err) {
      return response.status(400).send({ error: 'Login error' });
    }
  }
}

export default new SessionController();
