import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/consistent-type-exports: re-export without type modifier',
  preset: 'typescript',
  lang: 'ts',
  code: `
import type {Buffer} from 'node:buffer';
export {Buffer};
`,
  expected: [
    {line: 3, rule: '@typescript-eslint/consistent-type-exports'},
  ],
});
