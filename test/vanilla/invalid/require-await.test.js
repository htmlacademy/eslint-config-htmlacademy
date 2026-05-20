import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / require-await: async function without await',
  preset: 'vanilla',
  code: `
async function noop() {
  return 1;
}
noop();
`,
  expected: [
    {line: 2, rule: 'require-await'},
  ],
});
