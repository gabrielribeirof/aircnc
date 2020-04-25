const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader)
      return res.status(401).json({ error: 'Token not provided' });

    const parts = authHeader.split(' ');
    const [ scheme, token ] = parts;

    if (parts.length !== 2)
      return res.status(401).send({ error: 'Token error' });

    if (!/^Bearer$/i.test(scheme))
      return res.status(401).send({ error: 'Token malformatted' });

    const decoded = jwt.verify(token, authConfig.secret);

    req.userID = decoded.id;

    return next();
  } catch (err) {
    console.log(err)
    return res.status(401).send({ error: 'Token invalid' });
  }
}