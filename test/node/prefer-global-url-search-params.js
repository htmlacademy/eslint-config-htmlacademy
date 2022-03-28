// If you using 'URLSearchParams', you should use the global variable 'URLSearchParams'.
const correctURLSearchParams = new URLSearchParams('s');

console.log(correctURLSearchParams);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// import {URLSearchParams} from 'url';
// const incorrectURLSearchParams = new URLSearchParams('s');
// console.log(incorrectURLSearchParams);
