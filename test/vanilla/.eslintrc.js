/* eslint-disable */
const config = require('../../vanilla');

config.parserOptions = {
  ecmaVersion: 2019,
  sourceType: 'module',
};

config.env = {
  'es2017': true,
  'browser': true,
};

module.exports = config;
