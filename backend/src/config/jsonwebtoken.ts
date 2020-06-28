import jwt from 'jsonwebtoken';

export const generateToken = (payload = {}) => jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: 86400,
});

export const verifyToken = (token: string) => jwt.verify(token, process.env.JWT_SECRET);
