/**
 * This is the file that will render all the jsons
 */
import Jay from '../jay';

import main from './app/main';
import hello from './app/hello';

// This is the main object that will render all the jsons
// format:
// 'file' : jsx object

const jsons = {
    'index' : main,
    'hello' : hello
};

Jay(jsons);