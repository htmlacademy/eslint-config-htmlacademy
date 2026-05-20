import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / no-promise-executor-return: returning value from Promise executor',
  preset: 'vanilla',
  code: `
const promise = new Promise((resolve) => resolve(1));
promise;
`,
  expected: [
    {line: 2, rule: 'no-promise-executor-return'},
  ],
});
