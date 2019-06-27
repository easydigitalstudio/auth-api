import validator from './template.validator';

describe('validator', () => {
  let schema;
  let data;
  beforeEach(() => {
    schema = {
      title: 'Client',
      type: 'object',
      properties: {
        name: { type: 'string' },
        password: { type: 'string' },
      },
      required: ['name', 'password'],
    };
    data = {
      name: '',
      password: '',
    };
  });
  it('Should return true', async () => {
    expect(await validator(data, schema)).to.equals(true);
  });
  it('Should throw an error', async () => {
    data = {
      name: '',
    };
    let error = false;

    try {
      await validator(data, schema);
    } catch (e) {
      error = e.message;
    }

    expect(error).to.equals('instance requires property "password"');
  });
});
