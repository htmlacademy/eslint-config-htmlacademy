// expected: n/no-sync
import {readFileSync} from 'node:fs';
const data = readFileSync('any.txt', 'utf8');
console.log(data);
