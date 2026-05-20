import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / jsx-a11y/anchor-is-valid: anchor without valid href',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Skip = () => <a>Skip to content</a>;
`,
  expected: [
    {rule: 'jsx-a11y/anchor-is-valid'},
  ],
});
