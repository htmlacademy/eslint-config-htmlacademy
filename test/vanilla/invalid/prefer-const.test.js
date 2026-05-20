import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / prefer-const: let that is never reassigned',
  preset: 'vanilla',
  code: `
let value = 1;
value;
`,
  expected: [
    {line: 2, rule: 'prefer-const'},
  ],
});
