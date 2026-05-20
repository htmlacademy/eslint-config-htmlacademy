import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / dot-notation: bracket access for valid identifier',
  preset: 'vanilla',
  code: `
const data = {name: 'a'};
const value = data['name'];
value;
`,
  expected: [
    {line: 3, rule: 'dot-notation'},
  ],
});
