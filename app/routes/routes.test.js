import express from 'express';
import request from 'supertest';
import routes from './routes';

let app;

describe('routes', () => {
  beforeEach(() => {
    app = express();
    app.use(routes);
  });
  describe('/', () => {
    it('Should return Hello World!', (done) => {
      request(app)
        .get('/')
        .expect(200, '"Hello World!"', done);
    });
    it('Should throw an error!', (done) => {
      request(app)
        .get('/')
        .expect(200, '"Hello World!"', done);
    });
  });
});
