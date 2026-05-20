import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/array-type: Array<T> generic instead of T[]',
  preset: 'typescript',
  lang: 'ts',
  code: `
const items: Array<number> = [1, 2, 3];
items;
`,
  expected: [
    {line: 2, rule: '@typescript-eslint/array-type'},
  ],
});
