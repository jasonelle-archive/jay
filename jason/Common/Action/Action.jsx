/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import { h } from 'preact';

import validations from '../../validations';

const context = 'action';

const Action = ({ className, type, trigger, children }) => {
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

  if (className) {
    // If className is present then this action is used in $jason.head.actions
    value = className.toString().trim();
    validations.string.not.empty(value, context);

    // The $ is needed in order to force JSX to interpret the variable
    // Otherwise JSX consider the tag as markup.
    const $Element = className;
    return <$Element {...props}>{children}</$Element>;
  }

  return <action {...props}>{children}</action>;
};

export default Action;
