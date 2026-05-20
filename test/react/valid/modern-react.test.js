import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / valid: small accessible component',
  preset: 'react',
  lang: 'jsx',
  code: `
const Logo = () => null;

export const Header = ({title}) => (
  <header>
    <Logo />
    <h1>{title}</h1>
    <a href="https://example.com" rel="noopener" target="_blank">External</a>
  </header>
);
`,
});
