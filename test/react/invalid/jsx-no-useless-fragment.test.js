import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @eslint-react/jsx-no-useless-fragment: fragment wrapping single child',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Component = () => (
  <>
    <div />
  </>
);
`,
  expected: [
    {rule: '@eslint-react/jsx-no-useless-fragment'},
  ],
});
