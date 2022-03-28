// If you using 'TextEncoder', you should use the global variable 'TextEncoder'.
const correctTextEncoder = new TextEncoder('s');

console.log(correctTextEncoder);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// import {TextEncoder} from 'util';
// const incorrectTextEncoder = new TextEncoder('s');
// console.log(incorrectTextEncoder);
