import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/no-callback-literal: invoking callback with literal first arg',
  preset: 'node',
  code: `
export const run = (callback) => {
  callback(true);
};
`,
  expected: [
    {line: 3, rule: 'n/no-callback-literal'},
  ],
});
