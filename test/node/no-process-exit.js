/* global Process */

// If you are handling an application error,
// it would be better if you use the `throw New Error()` construct
// instead `process.exit()`. For example:

const errorMock = {
  title: 'error object',
  stack: 'error stack',
};
const dataMock = {
  title: 'data object',
  payload: 'data'
};

const doSomething = (result) => console.log(result);

function correctLoadData (error, data) {
  if (error) {
    // Handle error with `throw new Error`
    throw new Error(error.stack);
  }
  doSomething(data);
}

correctLoadData(errorMock, dataMock);

// But also you can use `Process.exit()`

Process.exit();
const exit = process.exit;

exit();

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// process.exit(1);
// process.exit(0);
