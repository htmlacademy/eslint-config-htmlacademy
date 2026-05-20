import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / yoda: literal on left side of comparison',
  preset: 'vanilla',
  code: `
const value = 1;
if (1 === value) value;
`,
  expected: [
    {line: 3, rule: 'yoda'},
  ],
});
