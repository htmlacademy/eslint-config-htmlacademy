// expected: n/no-process-env
import process from 'node:process';
const debug = process.env.DEBUG;
console.warn(debug);
