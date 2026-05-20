import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/handle-callback-err: err argument ignored',
  preset: 'node',
  code: `
export function load(callback) {
  callback(null, 'data');
}

load((err, value) => {
  console.warn(value);
});
`,
  expected: [
    {line: 6, rule: 'n/handle-callback-err'},
  ],
});
