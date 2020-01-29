const joi = require('@hapi/joi');
const merge = require('lodash/merge');
const mixin = require('../elements/core/mixin');
/**
 * This is the main document that will hold all the information.
 */
const document = () => ({
  json: function() {
    return JSON.stringify(this);
  },
  object: function() {
    return JSON.parse(this.json());
  },

  mixin: function(uri) {
    if (!this['@']) {
      this['@'] = '';
    }
    this['@'] = mixin(uri);
    return this;
  },

  append: function(object) {
    const schema = joi.object().required();
    const result = schema.validate(object);
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      throw new Error(error);
    }

    merge(this, object);
    return this;
  },

  jason: function({ head, body } = {}) {
    if (!this.$jason) {
      this.$jason = {};
    }

    const schema = joi.object().keys({
      head: joi.object().optional(),
      body: joi.object().optional()
    });

    const result = schema.validate({ head: head || {}, body: body || {} });
    const { error } = result;
    const valid = error == null;

    if (!valid) {
      throw new Error(error);
    }

    if (head) {
      this.$jason.head = head;
    }

    if (body) {
      this.$jason.body = body;
    }

    return this;
  }
});

module.exports = document;
