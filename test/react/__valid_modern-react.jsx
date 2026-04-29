// valid
const Logo = () => null;

export const Header = ({title}) => (
  <header>
    <Logo />
    <h1>{title}</h1>
    <a href="https://example.com" rel="noopener" target="_blank">External</a>
  </header>
);
