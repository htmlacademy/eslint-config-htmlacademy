import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / guard-for-in: for-in without hasOwn guard',
  preset: 'vanilla',
  code: `
const data = {a: 1, b: 2};
for (const key in data) {
  data[key];
}
`,
  expected: [
    {line: 3, rule: 'guard-for-in'},
  ],
});
