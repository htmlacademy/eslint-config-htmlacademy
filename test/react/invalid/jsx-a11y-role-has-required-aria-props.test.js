import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / jsx-a11y/role-has-required-aria-props: role=slider without aria-valuenow',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Volume = () => <div role="slider" />;
`,
  expected: [
    {rule: 'jsx-a11y/role-has-required-aria-props'},
  ],
});
