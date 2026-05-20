import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/prefer-global/buffer: using global Buffer without import',
  preset: 'node',
  code: `
const data = Buffer.from('hello');
console.warn(data);
`,
  expected: [
    {line: 2, rule: 'n/prefer-global/buffer'},
  ],
});
