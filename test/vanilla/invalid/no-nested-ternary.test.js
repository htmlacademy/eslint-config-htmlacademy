import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-nested-ternary: ternary inside ternary',
  preset: 'vanilla',
  code: `
const value = 1;
const result = value ? (value > 0 ? 'positive' : 'zero') : 'negative';
result;
`,
  expected: [
    {line: 3, rule: 'no-nested-ternary'},
  ],
});
