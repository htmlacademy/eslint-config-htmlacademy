'use strict';

// Continuation, aka MemberExpression
const promise = window.Promise.resolve(true);
promise.
  then(function (data) {
    return data;
  }).
  then(function (truthy) {
    return !truthy;
  }).
  catch(function () {
    return false;
  });

// Function expression
const fun = function (first, second) {
  return first + second;
};

// Function declaration
function Constructor(first, second) {
  this.data = {
    first: first,
    second: second,
  };
}

// Calling site arguments
const myObject = new Constructor(
  'Petya',
  'Vasya',
);
myObject.toString();

const result = fun(
  'one',
  'two',
);
result.toString();

// Switch
const a = 'a';

switch(a) {
  case 'a':
    break;
  case 'b':
    break;
}
