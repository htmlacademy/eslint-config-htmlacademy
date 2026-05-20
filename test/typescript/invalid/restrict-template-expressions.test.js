import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/restrict-template-expressions: array interpolated as string',
  preset: 'typescript',
  lang: 'ts',
  code: `
export function describe(items: number[]): string {
  return \`count: \${items}\`;
}
`,
  expected: [
    {line: 3, rule: '@typescript-eslint/restrict-template-expressions'},
  ],
});
