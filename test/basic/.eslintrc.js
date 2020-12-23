const config = require('../../basic');

config.parserOptions = {
  ecmaVersion: 9,
  sourceType: 'module',
};
config.env = {
  'es2017': true,
  'browser': true,
  'commonjs': true,
};

module.exports = config;
