const errorMock = {
  title: 'error object',
  stack: 'error stack',
};
const dataMock = {
  title: 'data object',
  payload: 'data'
};

const doSomething = (result) => console.log(result);

// If you use callback pattern
function correctLoadData (error, data) {
  // You should handle errors first
  if (error) {
    console.log(error.stack);
  }
  doSomething(data);
}

correctLoadData(errorMock, dataMock);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// function incorrectLoadData (error, data) {
//   doSomething(data);
// }
// incorrectLoadData(errorMock, dataMock);
