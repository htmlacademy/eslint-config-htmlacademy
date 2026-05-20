import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / valid: modern, idiomatic JavaScript snippet',
  preset: 'vanilla',
  code: `
const items = [1, 2, 3];
const doubled = items.map((item) => item * 2);
const message = \`doubled: \${doubled.join(', ')}\`;
message;
`,
});
