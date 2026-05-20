import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / prefer-promise-reject-errors: rejecting with non-Error',
  preset: 'vanilla',
  code: `
const promise = Promise.reject('failure');
promise.catch(() => {});
`,
  expected: [
    {line: 2, rule: 'prefer-promise-reject-errors'},
  ],
});
