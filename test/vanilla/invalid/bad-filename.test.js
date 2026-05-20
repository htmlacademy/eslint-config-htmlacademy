import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / check-file/filename-naming-convention: PascalCase file name',
  preset: 'vanilla',
  filename: 'BadFileName.js',
  code: `
const value = 1;
value;
`,
  expected: [
    {rule: 'check-file/filename-naming-convention'},
  ],
});
