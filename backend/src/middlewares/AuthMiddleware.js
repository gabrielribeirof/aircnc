const { verifyToken } = require('../config/jwt');

module.exports = (request, response, next) => {
  const { authorization } = request.headers;

  try {
    if (!authorization) {
      return response.status(401).json({ error: 'Token not provided' });
    }

    const parts = authorization.split(' ');
    const [scheme, token] = parts;

    if (parts.length !== 2) {
      return response.status(401).send({ error: 'Token error' });
    }

    if (!/^Bearer$/i.test(scheme)) {
      return response.status(401).send({ error: 'Token malformatted' });
    }

    const decoded = verifyToken(token);

    request.userID = decoded.id;

    return next();
  } catch (err) {
    return response.status(401).send({ error: 'Token invalid' });
  }
};
