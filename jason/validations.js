/* eslint-disable no-unused-vars */
import v8n from 'v8n';
import url from 'url';
import helpers from './helpers';

const throwError = (message, context = '') => {
  const err = new Error();
  err.message = `Validation Error: ${message}`;
  err.name = context;
  throw err;
};

const childsAreValid = (children, validChildren, context = '') => {
  const names = [];
  children.forEach(child => {
    names.push(helpers.get.child.name(child));
  });

  names.forEach(name => {
    if (!validChildren.includes(name.toString())) {
      throwError(`"${JSON.stringify(name)}" is not a valid child.`, context);
    }
  });
};

const arrayContains = (value, items, context = '') => {
  if (!items.includes(value)) {
    throwError(`"${value}" not in ${JSON.stringify(items)}`, context);
  }
};

const stringIsNotEmpty = (string, context = '') => {
  try {
    v8n()
      .string()
      .not.empty()
      .check(string);
  } catch (err) {
    throwError(`${string} is not a valid non empty string.`, context);
  }
};

const stringIsUrl = (string, context = '') => {
  try {
    const Url = new URL(string);
  } catch (err) {
    throwError(`${string} is not a valid url.`, context);
  }
};

const notAtTheSameTimeError = (values, context = '') => {
  throwError(
    `${JSON.stringify(values)} should not be present at the same time.`,
    context
  );
};

const validations = {
  string: {
    not: {
      empty: stringIsNotEmpty
    },
    is: {
      url: stringIsUrl
    }
  },
  children: {
    are: {
      valid: childsAreValid
    }
  },
  array: {
    contains: arrayContains
  },
  errors: {
    not: {
      at: {
        same: {
          time: notAtTheSameTimeError
        }
      }
    }
  }
};

export default validations;
