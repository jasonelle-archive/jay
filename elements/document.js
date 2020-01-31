const joi = require('@hapi/joi');
const mixin = require('../elements/core/mixin');
const Base = require('./core/base');

/**
 * This is the main document that will hold all the information.
 */
const document = () => {
  const instance = Base();
  Object.assign(instance, {
    jason: function({ head, body } = {}) {
      if (!this.__data.$jason) {
        this.__data.$jason = {};
      }

      const schema = joi.object().keys({
        head: joi
          .object()
          .allow(null)
          .optional(),
        body: joi
          .object()
          .allow(null)
          .optional()
      });

      const result = schema.validate({ head: head, body: body });
      const { error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      if (head) {
        this.__data.$jason.head = head;
      }

      if (body) {
        this.__data.$jason.body = body;
      }

      return this;
    }
  });

  return instance;
};

module.exports = document;
