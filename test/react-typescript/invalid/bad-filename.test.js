import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / check-file/filename-naming-convention: kebab-case for component file',
  preset: 'react-typescript',
  lang: 'tsx',
  filename: 'bad-component.tsx',
  code: `
export const Component = (): JSX.Element => <div />;
`,
  expected: [
    {rule: 'check-file/filename-naming-convention'},
  ],
});
