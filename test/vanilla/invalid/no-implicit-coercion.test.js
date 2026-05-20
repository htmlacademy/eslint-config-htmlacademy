import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-implicit-coercion: !!value to coerce to boolean',
  preset: 'vanilla',
  code: `
const value = 1;
const flag = !!value;
flag;
`,
  expected: [
    {line: 3, rule: 'no-implicit-coercion'},
  ],
});
