/* eslint-disable no-console */
import { h } from "preact";
import render from "preact-render-to-json";
import colors from "colors";

import Jason from "./Jason";
import Style from "./Style";

import { Head, Styles } from "./Head";

const renderJay = params => {
  try {
    return render(params);
  } catch (error) {
    console.trace(colors.red(error));
    throw error;
  }
};

export { h, renderJay as render, Jason, Head, Styles, Style };

export default Jason;
