import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / prefer-arrow-callback: function expression as callback',
  preset: 'vanilla',
  code: `
const items = [1, 2, 3];
const doubled = items.map(function (item) {
  return item * 2;
});
doubled;
`,
  expected: [
    {line: 3, rule: 'prefer-arrow-callback'},
  ],
});
