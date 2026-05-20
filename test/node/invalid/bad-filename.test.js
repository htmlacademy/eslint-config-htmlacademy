import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / check-file/filename-naming-convention: PascalCase file name',
  preset: 'node',
  filename: 'BadFileName.js',
  code: `
const value = 1;
console.warn(value);
`,
  expected: [
    {rule: 'check-file/filename-naming-convention'},
  ],
});
