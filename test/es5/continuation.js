'use strict';

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
