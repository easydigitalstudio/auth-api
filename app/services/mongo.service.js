import { mongoCollection } from '@easydigitalstudio/express-server';

export function userCollection() {
  return mongoCollection('user');
}
