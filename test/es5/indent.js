'use strict';

// Continuation, aka MemberExpression
var promise = window.Promise.resolve(true);
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
var fun = function (first, second) {
  return first + second;
};

// Function declaration
function Constructor(first, second) {
  this.data = {
    first: first,
    second: second
  };
}

// Calling site arguments
var myObject = new Constructor(
    'Petya',
    'Vasya'
);
myObject.toString();

var result = fun(
    'one',
    'two'
);
result.toString();
