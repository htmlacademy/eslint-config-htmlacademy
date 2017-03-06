'use strict';

var bar = function (callback) {
  foo(callback);
};

var foo = function (callback) {
  bar(callback);
};

bar(function () {
  foo(function () {
    bar(function () {
      // maximum
    });
  });
});
