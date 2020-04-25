const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const authConfig = require('../../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async show(req, res) {
    const authHeader = req.headers.authorization;

    try {
      if (!authHeader)
        return res.status(400).json({ error: 'Credentials not provided' });

      const parts = authHeader.split(' ');
      const [ scheme, hash ] = parts;

      if (parts.length !== 2)
        return res.status(401).send({ error: 'Login error' });

      if (!/^Basic$/i.test(scheme))
        return res.status(401).send({ error: 'Login malformatted' });

      const [ email, password ] = Buffer.from(hash, 'base64').toString().split(':');
      
      const user = await User.findOne({ email }).select('+password');

      if (!user)
        return res.status(400).send({ error: 'User not found' });

      if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });

      user.password = undefined;

      res.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Login error' });
    }
  }
}