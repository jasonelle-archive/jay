const joi = require('@hapi/joi');

const url = uri => {
  const schema = joi
    .string()
    .uri({
      scheme: ['file', /https?/]
    })
    .required();

  const result = schema.validate(uri);
  const { value, error } = result;
  const valid = error == null;

  if (!valid) {
    throw new Error(error);
  }

  return value;
};

module.exports = url;
