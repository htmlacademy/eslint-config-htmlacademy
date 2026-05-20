import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/no-explicit-any: explicit `any` annotation',
  preset: 'typescript',
  lang: 'ts',
  code: `
export function unsafe(value: any): unknown {
  return value;
}
`,
  expected: [
    {line: 2, rule: '@typescript-eslint/no-explicit-any'},
  ],
});
