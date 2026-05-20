import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / jsx-a11y/iframe-has-title: iframe without title attribute',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Frame = () => <iframe sandbox="" src="https://example.com" />;
`,
  expected: [
    {rule: 'jsx-a11y/iframe-has-title'},
  ],
});
