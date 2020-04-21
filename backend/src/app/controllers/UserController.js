const User = require('../models/User');

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
    const { name, email } = req.body;

    try {
      if (await User.findOne({ name }))
        return res.status(400).send({ error: 'Name already exists' });
    
      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'Email already exists' });

      const user = await User.create({ name, email });

      return res.send(user);
    } catch (err) {
      return res.status(400).send({ error: 'Error adding user' });
    }
  },

  async update(req, res) {
    const { name, email } = req.body;
    const { user_id } = req.params;

    try {
      const user = await User.findById(user_id);

      if (!user)
        return res.status(400).send({ error: 'User not found' });

      if (name !== user.name && !await User.findOne({ name }))
        return res.status(400).send({ error: 'Name already exists' });

      if (email !== user.email && !await User.findOne({ email }))
        return res.status(400).send({ error: 'Email already exists' });

      const updatedUser = await user.update({ name, email });
      
      return res.send(updatedUser);
    } catch (err) {
      return res.status(400).send({ error: 'Error updating user' });
    }
  },

  async delete(req, res) {
    const { user_id } = req.params;

    try {
      const user = await User.findOneAndDelete(user_id);

      if (!user)
        return res.status(400).send({ error: 'User not found' });

      return res.send(user);
    } catch (err) {
      return res.status(400).send({ error: 'Error deleting user' });
    }
  }
}