import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node-typescript / n/no-sync: synchronous fs call',
  preset: 'node-typescript',
  lang: 'ts',
  code: `
import {readFileSync} from 'node:fs';
const data: string = readFileSync('any.txt', 'utf8');
console.warn(data);
`,
  expected: [
    {line: 3, rule: 'n/no-sync'},
  ],
});
