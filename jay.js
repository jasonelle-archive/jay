// Core NodeJS Libs
//const crypto = require('crypto');
// const querystring = require('querystring');
// const moment = require('moment-timezone');
// const he = require('he');
// const _ = require('lodash');
const joi = require('@hapi/joi');

// Core Jay Libs
const document = require('./elements/document');
const jay = {
  document
};

// Main Context Exports
window.jay = jay;
//  window.moment = moment;
window.Joi = joi;
// window.crypto = crypto;
