import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / accessor-pairs: setter without matching getter',
  preset: 'vanilla',
  code: `
const target = {
  set value(payload) {
    this._value = payload;
  },
};
target;
`,
  expected: [
    {line: 3, rule: 'accessor-pairs'},
  ],
});
