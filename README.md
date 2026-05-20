# ESLint Config for HTML Academy Codeguide

[![npm version](https://img.shields.io/npm/v/eslint-config-htmlacademy.svg)](https://www.npmjs.com/package/eslint-config-htmlacademy)
[![test](https://github.com/htmlacademy/eslint-config-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/eslint-config-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/eslint-config-htmlacademy.svg)](https://github.com/htmlacademy/eslint-config-htmlacademy/blob/main/LICENSE)

[ESLint](https://eslint.org) configuration for JavaScript and TypeScript validation according to [HTML Academy Codeguide](https://codeguide.academy).

## Requirements

- Node.js >= 24
- ESLint >= 10

## Installation

```bash
npm install -D eslint eslint-config-htmlacademy
```

## Usage

Create `eslint.config.js` in your project root and import the preset you need:

```js
import preset from 'eslint-config-htmlacademy/<preset-name>';

export default [
  ...preset,
];
```

## Presets

| Preset | Use case |
| --- | --- |
| `vanilla` | Plain JavaScript in the browser (widgets, vanilla apps) |
| `typescript` | TypeScript in the browser without a framework |
| `node` | Node.js (plain JavaScript) |
| `node-typescript` | Node.js with TypeScript |
| `react` | React, Vue or Angular without TypeScript |
| `react-typescript` | React, Vue or Angular with TypeScript |

TypeScript presets enable type-aware rules and require a valid `tsconfig.json`.

## Key Features

- **Modern style** — single quotes, trailing comma required in multiline literals, `function-call-spacing: 'never'` (`foo()`, not `foo ()`), mandatory braces (`curly: 'all'`), 2-space indent. Backticks reserved for template literals with interpolation.
- **Defensive set** — `eslint:recommended` extended with the codeguide ruleset: error prevention (`array-callback-return`, `no-promise-executor-return`, `require-await`, `no-self-compare`, `no-implicit-coercion`, `no-template-curly-in-string`, `no-throw-literal`, `default-param-last`), variable hygiene (`no-use-before-define`, `no-shadow` with hoisting, `no-undef-init`), discipline (`no-alert`, `no-console`, `no-eval`, `no-iterator`, `no-labels`, `no-with`).
- **Modern syntax** — `prefer-const`, `no-var`, `prefer-template`, `prefer-arrow-callback`, `object-shorthand`, `prefer-rest-params`, `prefer-spread`, `prefer-object-has-own`, `prefer-object-spread`, `logical-assignment-operators`.
- **Readability** — `no-else-return`, `no-nested-ternary`, `no-unneeded-ternary`, `max-nested-callbacks: 3`, `one-var: 'never'`, `consistent-return`, `dot-notation`, `yoda: 'never'`.
- **TypeScript** — `typescript-eslint` `strictTypeChecked` + `stylisticTypeChecked` sets (~150 type-aware rules). `consistent-type-imports` and `consistent-type-exports` enforced. `no-unsafe-*` reports as a warning for gradual `any` cleanup. `parserOptions.projectService: true` auto-discovers `tsconfig.json`, monorepo-friendly.
- **Node.js** — `eslint-plugin-n` v18 + `eslint-plugin-unicorn` recommended. Built-in objects must be imported (`import process from 'node:process'`); only `console` stays global. `n/no-sync: error`, `n/no-process-env: warn` (`NODE_ENV` allowed), `unicorn/prefer-node-protocol: error`.
- **React / Vue / Angular** — `@eslint-react/eslint-plugin` v5 + `eslint-plugin-jsx-a11y` recommended set: `alt-text`, `label-has-associated-control`, `anchor-is-valid`, `role-has-required-aria-props`, `iframe-has-title`, `no-noninteractive-element-interactions`, ARIA validators. Plus `dom-no-missing-button-type`, `dom-no-missing-iframe-sandbox`, `dom-no-unsafe-target-blank`, `no-unstable-context-value`, `no-unstable-default-props`. Full `@stylistic/jsx-*` formatting.
- **File naming** — `KEBAB_CASE` for `*.{js,ts}`; `PASCAL_CASE` for `*.{jsx,tsx,vue}` in React presets.

## File Naming

Source filenames must match the case convention enforced by `check-file`:

```text
src/utils/format-date.js          /* Valid: KEBAB_CASE */
src/components/Button.jsx         /* Valid: PASCAL_CASE for components */
src/components/Button.vue         /* Valid: PASCAL_CASE for components */

src/utils/formatDate.js           /* Invalid: camelCase */
src/components/button.jsx         /* Invalid: kebab-case for component */
```

## Quoting

Single quotes everywhere; double quotes only to avoid escaping:

```js
const message = 'hello';                  /* Valid */
const sentence = "It's working";          /* Valid: avoidEscape */
const greeting = `hello, ${name}`;        /* Valid: interpolation */

const title = "double quotes";            /* Invalid: prefer single */
const literal = `static string`;          /* Invalid: backticks without ${} */
```

In JSX attributes — double quotes:

```jsx
<button type="button" className="primary">Send</button>
```

## Imports in Node.js

Built-ins must come with the `node:` protocol; globals from `node:buffer`, `node:process`, etc., must be imported explicitly:

```js
/* Valid */
import {readFile} from 'node:fs/promises';
import process from 'node:process';
import {Buffer} from 'node:buffer';

/* Invalid */
import {readFile} from 'fs/promises';     /* missing node: */
const cwd = process.cwd();                /* `process` not imported */
const buf = Buffer.from('hi');            /* `Buffer` not imported */
```

`console` is the only built-in still available as a global.

## Extending

Add your own configuration objects after the spread:

```js
import nodeTypescript from 'eslint-config-htmlacademy/node-typescript';

export default [
  ...nodeTypescript,
  {
    files: ['scripts/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
];
```

## Editor Integration

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code.

For auto-fix on save, add to `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [ESLint Documentation](https://eslint.org/docs/latest/)
