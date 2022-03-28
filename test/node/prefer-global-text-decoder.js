// If you using 'TextDecoder', you should use the global variable 'TextDecoder'.
const correctTextDecoder = new TextDecoder('s');

console.log(correctTextDecoder);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// import {TextDecoder} from 'util';
// const incorrectTextDecoder = new TextDecoder('s');
// console.log(incorrectTextDecoder);
