import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node-typescript / unicorn/prefer-node-protocol: import without node: prefix',
  preset: 'node-typescript',
  lang: 'ts',
  code: `
import {readFile} from 'fs/promises';
console.warn(typeof readFile);
`,
  expected: [
    {line: 2, rule: 'unicorn/prefer-node-protocol'},
  ],
});
