const config = require('../../node');
config.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};
config.env = {
  'es6': true,
  'browser': false,
  'node': true,
  'commonjs': true
};

module.exports = config;