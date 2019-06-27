import { getConfig } from '@easydigitalstudio/express-server';

export default {
  port: getConfig('PORT'),
  mongo: {
    url: getConfig('MONGO_URL'),
    name: getConfig('APP_NAME'),
  },
  tokenSecret: getConfig('TOKEN_SECRET'),
};
