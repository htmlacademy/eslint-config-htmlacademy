import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-template-curly-in-string: ${} in regular string literal',
  preset: 'vanilla',
  code: `
const name = 'world';
const greeting = 'hello \${name}';
greeting;
name;
`,
  expected: [
    {line: 3, rule: 'no-template-curly-in-string'},
  ],
});
