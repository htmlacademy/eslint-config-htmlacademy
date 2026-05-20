import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / consistent-return: one branch returns value, another does not',
  preset: 'vanilla',
  code: `
function pick(flag) {
  if (flag) {
    return 1;
  }
  return;
}
pick(true);
`,
  expected: [
    {line: 6, rule: 'consistent-return'},
  ],
});
