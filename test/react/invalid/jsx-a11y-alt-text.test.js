import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / jsx-a11y/alt-text: img without alt attribute',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Avatar = () => <img src="/me.jpg" />;
`,
  expected: [
    {rule: 'jsx-a11y/alt-text'},
  ],
});
