import Server from '@easydigitalstudio/express-server';
import routes from './routes/routes';
import config from './config';

const server = new Server({
  port: config.port,
  routes,
  name: 'base-microservice',
  mongo: config.mongo,
});

export default function start() {
  server.start();
}
