import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-else-return: else after return',
  preset: 'vanilla',
  code: `
function pick(value) {
  if (value) {
    return 1;
  } else {
    return 0;
  }
}
pick();
`,
  expected: [
    {line: 5, rule: 'no-else-return'},
  ],
});
