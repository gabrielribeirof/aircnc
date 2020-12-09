const { generateToken } = require('../config/jwt');

const User = require('../models/User');

class UserController {
  async show(request, response) {
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

  async store(request, response) {
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
}

module.exports = new UserController();
