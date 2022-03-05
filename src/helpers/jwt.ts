import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import 'dotenv/config';

interface TokenPayload {
  [x: string]: string;
}

const { JWT_SECRET_KEY } = process.env;

export const generateToken = (payload: TokenPayload | string): string => {
  const token = jwt.sign(payload, JWT_SECRET_KEY as Secret);
  return token;
};

export const verifyToken = (token: string): JwtPayload => {
  const decodedToken = jwt.verify(token, JWT_SECRET_KEY as Secret);
  return decodedToken as JwtPayload;
};
