/* eslint-disable */
const config = require('../../node');

config.parserOptions = {
  ecmaVersion: 2021,
  sourceType: 'module',
};

config.env = {
  'es2021': true,
  'node': true,
};

module.exports = config;
