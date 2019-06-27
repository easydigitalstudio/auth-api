import { tokenConstruct, tokenVerify } from './token.util';

describe('token', () => {
  let tokenData;
  beforeEach(() => {
    tokenData = {
      some: 'data',
    };
  });
  describe('tokenConstruct', () => {
    it('Should construct the token', async () => {
      expect(await tokenConstruct(tokenData)).to.have.length(124);
    });
  });
  describe('tokenVerify', () => {
    it('Should verify the token and return the content', async () => {
      const token = await tokenConstruct(tokenData);
      expect(await tokenVerify(token).some).to.equals('data');
    });
    it('Should fail to verify the token', async () => {
      let error = false;

      try {
        await tokenVerify('sayan');
      } catch (e) {
        error = e.message;
      }

      expect(error).to.equals('jwt malformed');
    });
  });
});
