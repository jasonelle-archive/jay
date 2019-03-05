/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import { h } from 'preact';

import validations from '../validations';

const context = 'style';

const Style = ({
  className,
  font,
  style,
  padding,
  background,
  color,
  colorPlaceholder,
  colorDisabled,
  size,
  align,
  width,
  height,
  top,
  left
}) => {
  let props = {};
  let value = null;

  if (font) {
    value = font.toString().trim();
    validations.string.not.empty(value, context);
    props = { font: value };
  }

  if (style) {
    value = style.toString().trim();
    validations.string.not.empty(value, context);
    props = { style: value, ...props };
  }

  if (padding) {
    value = padding.toString().trim();
    validations.string.not.empty(value, context);
    props = { padding: value, ...props };
  }

  if (background) {
    value = background.toString().trim();
    validations.string.not.empty(value, context);
    props = { background: value, ...props };
  }

  if (color) {
    value = color.toString().trim();
    validations.string.not.empty(value, context);
    props = { color: value, ...props };
  }

  if (colorPlaceholder) {
    value = colorPlaceholder.toString().trim();
    validations.string.not.empty(value, context);
    props = { 'color:placeholder': value, ...props };
  }

  if (colorDisabled) {
    value = colorDisabled.toString().trim();
    validations.string.not.empty(value, context);
    props = { 'color:disabled': value, ...props };
  }

  if (size) {
    value = size.toString().trim();
    validations.string.not.empty(size, context);
    props = { size: value, ...props };
  }

  if (align) {
    value = align.toString().trim();
    validations.string.not.empty(align, context);
    props = { align: value, ...props };
  }

  if (width) {
    value = width.toString().trim();
    validations.string.not.empty(width, context);
    props = { width: value, ...props };
  }

  if (height) {
    value = height.toString().trim();
    validations.string.not.empty(height, context);
    props = { height: value, ...props };
  }

  if (top) {
    value = top.toString().trim();
    validations.string.not.empty(top, context);
    props = { top: value, ...props };
  }

  if (left) {
    value = left.toString().trim();
    validations.string.not.empty(left, context);
    props = { left: value, ...props };
  }

  if (className) {
    // If className is present then this style is used in $jason.head.styles
    value = className.toString().trim();
    validations.string.not.empty(value, context);

    // The $ is needed in order to force JSX to interpret the variable
    // Otherwise JSX consider the tag as markup.
    const $Element = className;
    return <$Element {...props} />;
  }

  return <style {...props} />;
};

export default Style;
