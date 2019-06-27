import { noCallThru } from 'proxyquire';
import '@easydigitalstudio/express-server';

const proxyquire = noCallThru();
const startSpy = sinon.spy();

const start = proxyquire('./server', {
  '@easydigitalstudio/express-server': class Server {
    start() {
      this.start = true;
      startSpy();
    }
  },
}).default;

describe('server', () => {
  beforeEach(() => {
    startSpy.resetHistory();
  });
  it('Should start the server', () => {
    start();
    expect(startSpy).to.have.been.called; // eslint-disable-line no-unused-expressions
  });
});
