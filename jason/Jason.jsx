/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import { h } from 'preact';

import validations from './validations';

// The $ is needed in order to force JSX to interpret the variable
// Otherwise JSX consider the tag as markup.
const $Jason = '$jason';

const Jason = ({ children }) => {
  const context = $Jason;
  const validChildren = ['head', 'body'];

  validations.children.are.valid(children, validChildren, context);
  return <$Jason>{children}</$Jason>;
};

export default Jason;
