import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / default-param-last: default value before required param',
  preset: 'vanilla',
  code: `
function pick(value = 1, flag) {
  return flag ? value : 0;
}
pick();
`,
  expected: [
    {line: 2, rule: 'default-param-last'},
  ],
});
