const joi = require('@hapi/joi');

const head = () => ({
  description: function(text) {
    if (!this.description) {
      this.description = '';
    }
    const schema = joi.string().optional();
    const result = schema.validate(text);
    const { value, error } = result;
    const valid = error == null;

    if (!valid) {
      throw new Error(error);
    }

    this.description = value;
    return this;
  }
});

module.exports = head;
