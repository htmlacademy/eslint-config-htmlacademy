// expected: no-nested-ternary
const status = 1;
const label = status === 0 ? 'zero' : status === 1 ? 'one' : 'other';
console.log(label);
