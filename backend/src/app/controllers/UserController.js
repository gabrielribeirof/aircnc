const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find().populate('spots');

      return res.send(users);
    } catch (err) {
      return res.status(400).send({ error: 'Error loading users' });
    }
  },

  async show(req, res) {
    const { user_id } = req.params;

    try {
      const user = await User.findById(user_id);
  
      if (!user)
        return res.status(400).send({ error: 'User not found' });

      return res.send(user);
    } catch (err) {
      return res.status(400).send({ error: 'Error finding user' });
    }  
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      if (await User.findOne({ name }))
        return res.status(400).send({ error: 'Name already exists' });

      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'Email already exists' });

      const user = await User.create({ name, email, password });

      user.password = undefined;

      return res.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (err) {
      return res.status(400).send({ error: 'Error adding user' });
    }
  },

  async update(req, res) {
    const { name, email } = req.body;
    const { user_id } = req.params;

    try {
      if (req.userID !== user_id)
        return res.status(403).send({ error: 'Not authorized for this action' });
      
      const user = await User.findById(user_id);

      if (!user)
        return res.status(400).send({ error: 'User not found' });

      if (name !== user.name && await User.findOne({ name }))
        return res.status(400).send({ error: 'Name already exists' });

      if (email !== user.email && await User.findOne({ email }))
        return res.status(400).send({ error: 'Email already exists' });

      await user.updateOne({ name, email });
      
      return res.send({
        name,
        email
      });
    } catch (err) {
      return res.status(400).send({ error: 'Error updating user' });
    }
  },

  async delete(req, res) {
    const { user_id } = req.params;

    try {
      if (req.userID !== user_id)
        return res.status(403).send({ error: 'Not authorized for this action' });
        
      const user = await User.findOneAndDelete(user_id);

      if (!user)
        return res.status(400).send({ error: 'User not found' });

      return res.send(user);
    } catch (err) {
      return res.status(400).send({ error: 'Error deleting user' });
    }
  }
}