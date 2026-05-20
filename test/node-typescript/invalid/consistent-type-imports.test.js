import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node-typescript / @typescript-eslint/consistent-type-imports: type-only import without `type` modifier',
  preset: 'node-typescript',
  lang: 'ts',
  code: `
import {Buffer} from 'node:buffer';
export function describe(buffer: Buffer): string {
  return typeof buffer;
}
`,
  expected: [
    {line: 2, rule: '@typescript-eslint/consistent-type-imports'},
  ],
});
