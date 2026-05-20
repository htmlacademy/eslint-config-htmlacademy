import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / prefer-template: string concatenation instead of template literal',
  preset: 'vanilla',
  code: `
const name = 'world';
const greeting = 'hello ' + name;
greeting;
`,
  expected: [
    {line: 3, rule: 'prefer-template'},
  ],
});
