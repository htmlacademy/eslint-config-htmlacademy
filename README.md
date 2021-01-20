# eslint-config-htmlacademy [![Build status][travis-image]][travis-url]

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [HTML Academy](http://htmlacademy.ru) courses

## Installation

```
$ npm install --save-dev eslint-config-htmlacademy
```

Package requires `eslint`. You must install it manually.


## Usage

Once the `eslint-config-htmlacademy` package is installed, you can use it by specifying `htmlacademy` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

For validating **Vanilla JS** project use `vanilla` version:

```json
{
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "es2017": true,
    "browser": true
  },
  "extends": "htmlacademy/vanilla",
  "rules": {
    // Additional rules...
  }
}
```

**React.js** and **Node.js** versions soon.

[travis-image]: https://travis-ci.org/htmlacademy/eslint-config-htmlacademy.svg?branch=master
[travis-url]: https://travis-ci.org/htmlacademy/eslint-config-htmlacademy