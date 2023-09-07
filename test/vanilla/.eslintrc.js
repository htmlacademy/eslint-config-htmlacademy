/* eslint-disable */
const config = require('../../vanilla');

config.parserOptions = {
  ecmaVersion: 2023,
  sourceType: 'module',
};

config.env = {
  'es2023': true,
  'browser': true,
};

module.exports = config;
