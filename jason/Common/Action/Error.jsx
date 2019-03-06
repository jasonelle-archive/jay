/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import { h } from 'preact';

import validations from '../../validations';

const context = 'action.error';

const Error = ({ type, trigger, children }) => {
  if (type && trigger) {
    validations.errors.not.at.same.time(['type', 'trigger'], context);
  }

  let props = {};
  let value = null;

  if (type) {
    value = type.toString().trim();
    validations.string.not.empty(value, context);
    props = { type: value };
  }

  if (trigger) {
    value = trigger.toString().trim();
    validations.string.not.empty(trigger, context);
    props = { trigger: value };
  }

  if (children) {
    const validChildren = ['options', 'success', 'error'];
    validations.children.are.valid(children, validChildren, context);
  }

  return <error {...props}>{children}</error>;
};

export default Error;
