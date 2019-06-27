import { hash, compare } from './hash.util';

describe('hash', () => {
  describe('hash', () => {
    it('Should hash the password', async () => {
      expect(await hash('mypass')).to.have.length(60);
    });
  });
  describe('compare', () => {
    it('Should compare the password and return true', async () => {
      const password = 'mypass';
      const pass = await hash(password);
      expect(await compare(password, pass)).to.equals(true);
    });
    it('Should compare the password and return false', async () => {
      const password = 'mypass';
      const pass = await hash(password);
      expect(await compare('my password', pass)).to.equals(false);
    });
  });
});
