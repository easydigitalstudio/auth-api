import validate from 'jsonschema';

const { Validator } = validate;

export default async (data, schema) => {
  const v = new Validator();
  const result = v.validate(data, schema);

  if (result.errors.length > 0) throw new Error(result.errors.map(({ stack }) => stack).join(', '));

  return true;
};
