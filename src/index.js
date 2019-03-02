/**
 * This is the file that will render all the jsons
 */

import main from './app/main';
import hello from './app/hello';

import Jay from '../jay';

// This is the main object that will render all the jsons
// format:
// 'file' : jsx object

const jsons = {
    'main' : main,
    'hello' : hello
};

Jay(jsons);