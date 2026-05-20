import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-var: var declaration',
  preset: 'vanilla',
  code: `
var value = 1;
value;
`,
  expected: [
    {line: 2, rule: 'no-var'},
  ],
});
