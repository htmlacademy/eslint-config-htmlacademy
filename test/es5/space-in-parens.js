'use strict';

var fun = function (variable) {
  return variable;
};

fun(function () {
});

fun(4, (4 + 5), 7);

var k = 7;
while (k--) {
  fun('fun!');
}
