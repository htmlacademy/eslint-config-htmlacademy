import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / check-file/filename-naming-convention: kebab-case for component file',
  preset: 'react',
  lang: 'jsx',
  filename: 'bad-component.jsx',
  code: `
export const Component = () => <div />;
`,
  expected: [
    {rule: 'check-file/filename-naming-convention'},
  ],
});
