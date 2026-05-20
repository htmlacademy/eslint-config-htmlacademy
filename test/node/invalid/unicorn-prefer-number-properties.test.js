import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / unicorn/prefer-number-properties: parseFloat instead of Number.parseFloat',
  preset: 'node',
  code: `
const value = '42';
const number = parseFloat(value);
console.warn(number);
`,
  expected: [
    {line: 3, rule: 'unicorn/prefer-number-properties'},
  ],
});
