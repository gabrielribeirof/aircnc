const bcryptjs = require('bcryptjs');

const { generateToken } = require('../config/jwt');

const User = require('../models/User');

class SessionController {
  async show(request, response) {
    const { email, password } = request.body;

    try {
      if (!email || !password) {
        return response.status(400).json({ error: 'Credentials not provided' });
      }

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

module.exports = new SessionController();
