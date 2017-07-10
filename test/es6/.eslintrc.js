const config = require('../../es6');
config.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};
config.env = {
  'es6': true,
  'browser': true,
  'commonjs': true
};

module.exports = config;