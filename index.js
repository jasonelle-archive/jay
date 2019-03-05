/**
 * This is the file that will render all the jsons
 */
import Jay from 'jay';

import Main from './apps/Main';
import Hello from './apps/Hello';

// This is the main object that will render all the jsons
// format:
// 'file' : jsx object

const apps = {
  index: Main,
  hello: Hello
};

Jay(apps);
