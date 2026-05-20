import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / @stylistic/function-call-spacing: space between identifier and call',
  preset: 'vanilla',
  code: `
const noop = () => {};
noop ();
`,
  expected: [
    {line: 3, rule: '@stylistic/function-call-spacing'},
  ],
});
