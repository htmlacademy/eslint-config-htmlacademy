const doEnything = (fun) => fun ();

// arrow function callback
doEnything (() => {});

// generator as callback
doEnything (function* () {
  yield;
});

// function expression not used as callback or function argument
const doEnythingUsefull = function foo(value) {
  return value;
};

// recursive named function callback
doEnything (function doEnythingElse(value) {
  return value && value + doEnythingElse (value - 1);
});

// Default: { allowNamedFunctions: false, allowUnboundThis: true }
// 'allowUnboundThis': true, gives access to use next espressions

/* eslint-disable no-invalid-this */
// unbound function expression callback
doEnything (function () {
  return this.key;
});

doEnything (function () {
  doEnything (this.key);
});

doEnything (function () {
  (() => this) ();
});

const someObject = {};

[].map (function (item) {
  return this.doSomething (item);
}, someObject);
/* eslint-enable no-invalid-this */

throw new Error (doEnythingUsefull);
