import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-self-compare: comparing variable to itself',
  preset: 'vanilla',
  code: `
const value = 1;
if (value === value) value;
`,
  expected: [
    {line: 3, rule: 'no-self-compare'},
  ],
});
