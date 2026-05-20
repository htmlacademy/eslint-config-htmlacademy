import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/no-shadow: inner scope shadows outer typed binding',
  preset: 'typescript',
  lang: 'ts',
  code: `
const value: number = 1;
function inner(): number {
  const value: number = 2;
  return value;
}
inner();
value;
`,
  expected: [
    {line: 4, rule: '@typescript-eslint/no-shadow'},
  ],
});
