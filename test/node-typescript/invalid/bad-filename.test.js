import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node-typescript / check-file/filename-naming-convention: PascalCase file name',
  preset: 'node-typescript',
  lang: 'ts',
  filename: 'BadFileName.ts',
  code: `
export const value: number = 1;
`,
  expected: [
    {rule: 'check-file/filename-naming-convention'},
  ],
});
