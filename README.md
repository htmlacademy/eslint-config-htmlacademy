# eslint-config-htmlacademy
HTML Academy
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [HTML Academy](http://htmlacademy.org) ECMAScript courses


## Installation

```
$ npm install --save-dev eslint eslint-config-htmlacademy
```


## Usage

Once the `eslint-config-htmlacademy` package is installed, you can use it by specifying `htmlacademy` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

For validating ECMAScript 5 project use `es5` version:

```js
{
  "extends": "htmlacademy/es5",
  "rules": {
    // Additional rules...
  }
}
```

For validating ECMAScript 6 project use `es6` version:

```js
{
  "extends": "htmlacademy/es6",
  "rules": {
    // Additional rules...
  }
}
```
