import validateUser from './user.validator';

describe('user', () => {
  let data;
  beforeEach(() => {
    data = {
      email: '',
      password: '',
    };
  });
  it('Should return true', async () => {
    expect(await validateUser(data)).to.equals(true);
  });
  it('Should throw an error', async () => {
    data = {
      password: '',
    };
    let error = false;

    try {
      await validateUser(data);
    } catch (e) {
      error = e.message;
    }

    expect(error).to.equals('instance requires property "email"');
  });
});
