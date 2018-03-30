'use strict';

var generateCommand = {};
var ok = function () {
};
var fail = function () {
};

generateCommand.execute('something').
  then(function () {
    fail('error');
  }).
  catch(function () {
    ok('good');
  });

generateCommand.execute('something2').then(function () {
  fail('error');
}).catch(function () {
  ok('good');
});
