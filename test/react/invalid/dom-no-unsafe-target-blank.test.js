import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @eslint-react/dom-no-unsafe-target-blank: target=_blank without rel=noopener',
  preset: 'react',
  lang: 'jsx',
  code: `
export const ExternalLink = () => (
  <a href="https://example.com" target="_blank">link</a>
);
`,
  expected: [
    {rule: '@eslint-react/dom-no-unsafe-target-blank'},
  ],
});
