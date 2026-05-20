import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / default-case-last: default branch not last in switch',
  preset: 'vanilla',
  code: `
function pick(value) {
  switch (value) {
    default:
      return 0;
    case 1:
      return 1;
  }
}
pick(0);
`,
  expected: [
    {line: 4, rule: 'default-case-last'},
  ],
});
