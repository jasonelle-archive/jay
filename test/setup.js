require('@babel/register')({
  ignore: /node_modules/
});

const chai = require('chai');

global.expect = chai.expect;
global.chai = chai;
