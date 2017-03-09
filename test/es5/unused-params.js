'use strict';

var bar = function (param2) {
  return param2;
};

var foo = function () {
  bar();
};

var myObject = {
  method1: function () {
    return '12';
  },
  methodWithIgnoredParam: function (_ignore) {
    return 42;
  }
};

bar(function () {
  foo(function () {
    myObject.method1();
    myObject.methodWithIgnoredParam(122);
  });
});
