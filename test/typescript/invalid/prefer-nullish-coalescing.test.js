import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/prefer-nullish-coalescing: || on nullable value',
  preset: 'typescript',
  lang: 'ts',
  code: `
export function withDefault(value: string | null): string {
  return value || 'fallback';
}
`,
  expected: [
    {line: 3, rule: '@typescript-eslint/prefer-nullish-coalescing'},
  ],
});
