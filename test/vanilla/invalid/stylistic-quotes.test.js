import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / @stylistic/quotes: double quotes for plain string',
  preset: 'vanilla',
  code: `
const value = "double";
value;
`,
  expected: [
    {line: 2, rule: '@stylistic/quotes'},
  ],
});
