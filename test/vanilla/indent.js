'use strict';

// Continuation, aka MemberExpression
const promise = window.Promise.resolve(true);
promise.
  then((data) => {
    return data;
  }).
  then((truthy) => {
    return !truthy;
  }).
  catch(() => {
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
