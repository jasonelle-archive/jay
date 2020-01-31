const merge = require('lodash/merge');
const joi = require('@hapi/joi');

const Base = () => ({
  __data: {},
  value: function() {
    return this.__data || this;
  },
  json: function() {
    return JSON.stringify(this.value());
  },
  object: function() {
    return JSON.parse(this.json());
  },
  val: function() {
    return this.value();
  },
  append: function(object) {
    const schema = joi.object().required();
    const result = schema.validate(object);
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      throw new Error(error);
    }

    merge(this.__data, object);
    return this;
  }
});

module.exports = Base;
