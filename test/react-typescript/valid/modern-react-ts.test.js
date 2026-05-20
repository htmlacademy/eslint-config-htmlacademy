import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / valid: typed accessible component',
  preset: 'react-typescript',
  lang: 'tsx',
  code: `
import type {ReactNode} from 'react';

interface BoxProps {
  children: ReactNode;
  title: string;
}

export function Box({children, title}: BoxProps): JSX.Element {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
`,
});
