import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / eqeqeq: == instead of ===',
  preset: 'vanilla',
  code: `
const value = 1;
if (value == '1') value;
`,
  expected: [
    {line: 3, rule: 'eqeqeq'},
  ],
});
