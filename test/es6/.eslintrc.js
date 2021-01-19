const config = require(`../../es6`);
const es5config = require(`../../es5`);

const es5Rules = es5config.rules;

config.rules = {
  ...es5Rules,
  ...config.rules
};

config.parserOptions = {
  ecmaVersion: 9,
  sourceType: `module`
};
config.env = {
  'es6': true,
  'browser': true,
  'commonjs': true
};

module.exports = config;
