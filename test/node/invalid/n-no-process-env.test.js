import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/no-process-env: reading process.env.DEBUG (only NODE_ENV allowed)',
  preset: 'node',
  code: `
import process from 'node:process';
const debug = process.env.DEBUG;
console.warn(debug);
`,
  expected: [
    {line: 3, rule: 'n/no-process-env', severity: 'warning'},
  ],
});
