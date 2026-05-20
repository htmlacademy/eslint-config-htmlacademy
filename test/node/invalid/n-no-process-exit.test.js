import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/no-process-exit: process.exit() call',
  preset: 'node',
  code: `
import process from 'node:process';
process.exit(1);
`,
  expected: [
    {line: 3, rule: 'n/no-process-exit'},
  ],
});
