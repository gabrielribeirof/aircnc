import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { verifyToken } from '../config/jsonwebtoken';

export default (request: Request, response: Response, next: NextFunction) => {
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

    const decoded: any = verifyToken(token);

    request.userID = decoded.id;

    return next();
  } catch (err) {
    return response.status(401).send({ error: 'Token invalid' });
  }
};
