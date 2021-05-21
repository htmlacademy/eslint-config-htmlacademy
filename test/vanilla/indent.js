// Continuation, aka MemberExpression
const promise = window.Promise.resolve(true);
promise.
  then((data) => data).
  then((truthy) => !truthy).
  catch(() => false);

// Function expression
const calculateSum = function (sum, price) {
  return sum + price;
};

// Function declaration
function Constructor(name, price) {
  this.data = {
    name: name,
    price: price,
  };
}

// Calling site arguments
const objectSample = new Constructor(
  'Petya',
  'Vasya',
);
objectSample.toString();

const result = calculateSum(
  10000,
  1000,
);
result.toString();

// Switch
const symbol = 'a';

switch(symbol) {
  case 'a':
    break;
  case 'b':
    break;
}
