import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / jsx-a11y/alt-text: img without alt attribute',
  preset: 'react-typescript',
  lang: 'tsx',
  code: `
export const Avatar = (): JSX.Element => <img src="/me.jpg" />;
`,
  expected: [
    {rule: 'jsx-a11y/alt-text'},
  ],
});
