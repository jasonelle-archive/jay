/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import { h } from 'preact';
import validations from '../validations';

const context = '$jason.head';

const Head = ({ title, description, icon, offline, children }) => {
  let props = {};
  let value = null;

  if (title) {
    value = title.toString();
    validations.string.not.empty(value, context);
    props = { title: value };
  }

  if (description) {
    value = description.toString();
    validations.string.not.empty(value, context);
    props = { description: value, ...props };
  }

  if (icon) {
    value = icon.toString();
    validations.string.not.empty(value, context);
    validations.string.is.url(value, context);
    props = { icon: value, ...props };
  }

  if (offline) {
    props = { ...props, offline: 'true' };
  }

  if (children) {
    const validChildren = ['styles', 'actions', 'templates', 'data', 'agents'];

    validations.children.are.valid(children, validChildren, context);
  }

  return <head {...props}>{children}</head>;
};

export default Head;
