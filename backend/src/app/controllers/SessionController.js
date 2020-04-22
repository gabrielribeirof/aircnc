const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authConfig = require('../../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

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
  }
}