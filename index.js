/**
 * This is the file that will render all the jsons
 */
import Jay from './jay';

import Main from './src/app/Main';
import Hello from './src/app/Hello';

// This is the main object that will render all the jsons
// format:
// 'file' : jsx object

const apps = {
    'index' : Main,
    'hello' : Hello
};

Jay(apps);