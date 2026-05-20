import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/no-sync: using a Sync filesystem call',
  preset: 'node',
  code: `
import {readFileSync} from 'node:fs';
const data = readFileSync('any.txt', 'utf8');
console.warn(data);
`,
  expected: [
    {line: 3, rule: 'n/no-sync'},
  ],
});
