import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / curly: single-line if without braces',
  preset: 'vanilla',
  code: `
const value = 1;
if (value) value;
`,
  expected: [
    {line: 3, rule: 'curly'},
  ],
});
