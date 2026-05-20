import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / jsx-a11y/no-noninteractive-element-interactions: onClick on a non-interactive element',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Card = () => (
  <article onClick={() => {}}>content</article>
);
`,
  expected: [
    {rule: 'jsx-a11y/no-noninteractive-element-interactions'},
  ],
});
