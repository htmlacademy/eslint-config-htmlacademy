// expected: unicorn/prefer-node-protocol
import {readFile} from 'fs/promises';
console.warn(typeof readFile);
