import validator from './template.validator';

export default async (user) => {
  const schema = {
    title: 'User',
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'password'],
  };

  return validator(user, schema);
};
