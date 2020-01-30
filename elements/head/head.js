const joi = require('@hapi/joi');
const Base = require('../core/base');
const url = require('../core/url');

const head = () => {
  const instance = Base();
  Object.assign(instance, {
    title: function(text = '') {
      if (!this.__data.title) {
        this.__data.title = '';
      }
      const schema = joi
        .string()
        .allow('')
        .optional();
      const result = schema.validate(text);
      const { value, error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      this.__data.title = value;
      return this;
    },
    description: function(text = '') {
      if (!this.__data.description) {
        this.__data.description = '';
      }
      const schema = joi
        .string()
        .allow('')
        .optional();
      const result = schema.validate(text);
      const { value, error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      this.__data.description = value;
      return this;
    },
    icon: function(path) {
      if (!this.__data.icon) {
        this.__data.icon = '';
      }
      this.__data.icon = url(path);
      return this;
    },
    offline: function() {
      if (!this.__data.offline) {
        this.__data.offline = true;
      }
      return this;
    }
  });

  return instance;
};

module.exports = head;
