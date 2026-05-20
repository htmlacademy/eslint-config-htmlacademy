import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node / n/prefer-promises/fs: using callback-style fs',
  preset: 'node',
  code: `
import fs from 'node:fs';

export const read = (path) => {
  fs.readFile(path, () => {});
};
`,
  expected: [
    {line: 5, rule: 'n/prefer-promises/fs'},
  ],
});
