let config = require('../../es6');
config.parser = 'babel-eslint';
config.env = {
  'es6': true,
  'browser': true,
  'commonjs': true
};

module.exports = config;