import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / jsx-a11y/label-has-associated-control: label not bound to a form control',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Field = () => (
  <label>Username</label>
);
`,
  expected: [
    {rule: 'jsx-a11y/label-has-associated-control'},
  ],
});
