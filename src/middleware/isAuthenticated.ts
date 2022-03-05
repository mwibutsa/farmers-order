import { Request, Response, NextFunction } from 'express';
import jsonResponse from '@helpers/jsonResponse';
import { verifyToken } from '@helpers/jwt';
import * as statusCodes from '@constants/statusCodes';

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {void} -
 */
const isAuthenticated = (req: Request, res: Response, next: NextFunction): void | Response => {
  let token = req.headers['x-token'];
  token = String(token).replace('Bearer ', '');

  if (token) {
    const decodedToken = verifyToken(token);
    if (decodedToken.id) {
      req.currentUserId = decodedToken.id;
      return next();
    }
  }

  return jsonResponse({ status: statusCodes.HTTP_UNAUTHORIZED, message: 'Please login first', res });
};

export default isAuthenticated;
