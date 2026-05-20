import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/file-extension-in-import: relative import without .js extension',
  preset: 'node',
  code: `
import {value} from '../neighbor';
console.warn(value);
`,
  expected: [
    {line: 2, rule: 'n/file-extension-in-import'},
  ],
});
