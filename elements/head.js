const joi = require('@hapi/joi');
const Base = require('./core/base');
const url = require('./core/url');
const merge = require('lodash/merge');

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
    },
    actions: function(object = {}) {
      if (!this.__data.actions) {
        this.__data.actions = {};
      }
      const schema = joi.object().required();
      const result = schema.validate(object);
      const { error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      merge(this.__data.actions, object);
      return this;
    },
    styles: function(object = {}) {
      if (!this.__data.styles) {
        this.__data.styles = {};
      }
      const schema = joi.object().required();
      const result = schema.validate(object);
      const { error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      merge(this.__data.styles, object);
      return this;
    },
    templates: function(object = {}) {
      if (!this.__data.templates) {
        this.__data.templates = {};
      }
      const schema = joi.object().required();
      const result = schema.validate(object);
      const { error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      merge(this.__data.templates, object);
      return this;
    },
    agents: function(object = {}) {
      if (!this.__data.agents) {
        this.__data.agents = {};
      }
      const schema = joi.object().required();
      const result = schema.validate(object);
      const { error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      merge(this.__data.agents, object);
      return this;
    },

    data: function(object = {}) {
      if (!this.__data.data) {
        this.__data.data = {};
      }
      const schema = joi.object().required();
      const result = schema.validate(object);
      const { error } = result;
      const valid = error == null;

      if (!valid) {
        throw new Error(error);
      }

      merge(this.__data.data, object);
      return this;
    }
  });

  return instance;
};

module.exports = head;
