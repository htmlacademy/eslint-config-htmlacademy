import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @stylistic/jsx-pascal-case: snake_case component name in JSX',
  preset: 'react',
  lang: 'jsx',
  code: `
const Snake_Case = () => null;
export const App = () => <Snake_Case />;
`,
  expected: [
    {rule: '@stylistic/jsx-pascal-case'},
  ],
});
