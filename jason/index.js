/* eslint-disable no-console */
import { h } from 'preact';
import renderPreact from 'preact-render-to-json';
import colors from 'colors';

import Jason from './Jason';
import * as Head from './Head';
import * as Common from './Common';

const render = params => {
  try {
    return renderPreact(params);
  } catch (error) {
    console.trace(colors.red(error));
    throw error;
  }
};

export { Jason };
export { Head };
export { Common };
export { render };
export { h };
