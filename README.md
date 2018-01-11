# eslint-config-htmlacademy [![Build status][travis-image]][travis-url]
HTML Academy
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [HTML Academy](http://htmlacademy.org) ECMAScript courses


## Installation

```
$ npm install --save-dev eslint eslint-config-htmlacademy
```


## Usage

Once the `eslint-config-htmlacademy` package is installed, you can use it by specifying `htmlacademy` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

For validating **ECMAScript 5** project use `es5` version:

```json
{
  "extends": "htmlacademy/es5",
  "rules": {
    // Additional rules...
  }
}
```

For validating **ECMAScript 2015 (ES6)** project use `es6` version:

```json
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "es6": true
  },
  "extends": "htmlacademy/es6",
  "rules": {
    // Additional rules...
  }
}
```
For validating **ECMAScript 2015 (ES6)** in **Node.js** environment project use `es6` version:

```json
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": false,
    "node": true
  },
  "extends": "htmlacademy/node",
  "rules": {
    // Additional rules...
  }
}
```
[travis-image]: https://travis-ci.org/htmlacademy/eslint-config-htmlacademy.svg?branch=master
[travis-url]: https://travis-ci.org/htmlacademy/eslint-config-htmlacademy