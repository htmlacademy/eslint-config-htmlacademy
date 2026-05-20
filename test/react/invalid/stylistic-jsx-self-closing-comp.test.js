import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @stylistic/jsx-self-closing-comp: component with empty body not self-closed',
  preset: 'react',
  lang: 'jsx',
  code: `
const Logo = () => null;
export const Header = () => <Logo></Logo>;
`,
  expected: [
    {rule: '@stylistic/jsx-self-closing-comp'},
  ],
});
