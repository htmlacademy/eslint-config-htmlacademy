// If you using 'Buffer', you should use the global variable 'Buffer'.
const correctBuffer = Buffer.alloc(16);

console.log(correctBuffer);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// import {Buffer} from 'buffer';
// const incorectBuffer = Buffer.alloc(16);
// console.log(incorectBuffer);
