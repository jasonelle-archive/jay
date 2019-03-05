/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import { h } from 'preact';
import validations from './validations';

const Jason = ({ children }) => {
  const context = '$jason';
  const validChildren = ['head', 'body'];

  validations.children.are.valid(children, validChildren, context);

  // This is needed in order to render properly
  // the $jason root node.
  const $Jason = '$jason';
  return <$Jason>{children}</$Jason>;
};

export default Jason;
