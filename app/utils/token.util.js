import jwt from 'jsonwebtoken';
import config from '../config';

export function tokenConstruct(data) {
  return jwt.sign(data, config.tokenSecret);
}

export function tokenVerify(token) {
  return jwt.verify(token, config.tokenSecret);
}
