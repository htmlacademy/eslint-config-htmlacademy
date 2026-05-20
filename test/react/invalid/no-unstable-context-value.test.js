import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @eslint-react/no-unstable-context-value: inline object as Provider value',
  preset: 'react',
  lang: 'jsx',
  code: `
import {createContext} from 'react';

const Ctx = createContext(null);

export const Provider = ({children}) => (
  <Ctx.Provider value={{count: 0}}>
    {children}
  </Ctx.Provider>
);
`,
  expected: [
    {rule: '@eslint-react/no-unstable-context-value'},
  ],
});
