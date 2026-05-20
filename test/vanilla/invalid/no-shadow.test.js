import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-shadow: inner scope redeclares outer binding',
  preset: 'vanilla',
  code: `
const value = 1;
function inner() {
  const value = 2;
  return value;
}
inner();
value;
`,
  expected: [
    {line: 4, rule: 'no-shadow'},
  ],
});
