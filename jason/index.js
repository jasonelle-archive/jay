/* eslint-disable no-console */
import { h } from 'preact';
import render from 'preact-render-to-json';
import colors from 'colors';

import Jason from './Jason';

import { Head, Styles, Actions } from './Head';
import { Action, Style, Options } from './Common';

const renderJay = params => {
  try {
    return render(params);
  } catch (error) {
    console.trace(colors.red(error));
    throw error;
  }
};

export {
  h,
  renderJay as render,
  Jason,
  Head,
  Styles,
  Style,
  Actions,
  Action,
  Options
};

export default Jason;
