import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / array-callback-return: map without return',
  preset: 'vanilla',
  code: `
const items = [1, 2, 3];
items.map((item) => {
  item;
});
`,
  expected: [
    {line: 3, rule: 'array-callback-return'},
  ],
});
