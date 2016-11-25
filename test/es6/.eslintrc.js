let config = require('../../es6');
config.parser = 'babel-eslint';
config.env = {
    'es6': true,
    'browser': true
};

module.exports = config;