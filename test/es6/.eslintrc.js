let es6 = require('../../es6');
es6.parser = 'babel-eslint';
es6.env = {
    'es6': true,
    'browser': true
};

module.exports = es6;