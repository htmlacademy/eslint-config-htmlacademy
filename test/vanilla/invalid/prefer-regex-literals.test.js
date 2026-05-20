import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / prefer-regex-literals: RegExp constructor with literal',
  preset: 'vanilla',
  code: `
const pattern = new RegExp('abc');
pattern;
`,
  expected: [
    {line: 2, rule: 'prefer-regex-literals'},
  ],
});
