const errorMock = {
  title: 'error object',
  stack: 'error stack',
};

const doSomething = (result) => console.log(result);

// If you calling the callback multiple times
function correctLoadData (error, callback) {
  if (error) {
    // You should use `return` anytime the callback is triggered outside
    // of the main function body
    return callback(error.stack);
  }
  callback();
}

correctLoadData(errorMock, doSomething);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// function incorrectLoadData (error, callback) {
//   if (error) {
//     callback(error.stack);
//   }
//   callback();
// }
// incorrectLoadData(errorMock, doSomething);
