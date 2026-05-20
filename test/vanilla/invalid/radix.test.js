import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / radix: parseInt without radix argument',
  preset: 'vanilla',
  code: `
const value = parseInt('10');
value;
`,
  expected: [
    {line: 2, rule: 'radix'},
  ],
});
