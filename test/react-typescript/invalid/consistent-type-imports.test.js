import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / @typescript-eslint/consistent-type-imports: type-only import without `type` modifier',
  preset: 'react-typescript',
  lang: 'tsx',
  code: `
import {ReactNode} from 'react';
export const Box = (props: {children: ReactNode}) => <div>{props.children}</div>;
`,
  expected: [
    {line: 2, rule: '@typescript-eslint/consistent-type-imports'},
  ],
});
