import { h } from 'preact';
import validations from './validations';

const Style = ({
  className,
  font,
  style,
  padding,
  background,
  color,
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
    validations.string.not.empty(value);
    props = { font: value };
  }

  if (style) {
    value = style.toString().trim();
    validations.string.not.empty(value);
    props = { style: value, ...props };
  }

  if (padding) {
    value = padding.toString().trim();
    validations.string.not.empty(value);
    props = { padding: value, ...props };
  }

  if (background) {
    value = background.toString().trim();
    validations.string.not.empty(value);
    props = { background: value, ...props };
  }

  if (color) {
    value = color.toString().trim();
    validations.string.not.empty(value);
    props = { color: value, ...props };
  }

  if (size) {
    value = color.toString().trim();
    validations.string.not.empty(size);
    props = { size: value, ...props };
  }

  if (align) {
    value = align.toString().trim();
    validations.string.not.empty(align);
    props = { align: value, ...props };
  }

  if (width) {
    value = width.toString().trim();
    validations.string.not.empty(width);
    props = { width: value, ...props };
  }

  if (height) {
    value = height.toString().trim();
    validations.string.not.empty(height);
    props = { height: value, ...props };
  }

  if (top) {
    value = top.toString().trim();
    validations.string.not.empty(top);
    props = { top: value, ...props };
  }

  if (left) {
    value = left.toString().trim();
    validations.string.not.empty(left);
    props = { left: value, ...props };
  }

  if (className) {
    value = className.toString().trim();
    validations.string.not.empty(value);

    // The $ is needed in order to force JSX to interpret the variable
    // Otherwise JSX consider the tag as markup.
    const $element = className;
    return <$element {...props} />;
  }

  return <style {...props} />;
};

export default Style;
