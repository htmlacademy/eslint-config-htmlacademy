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

- **Modern style** — `foo()` (no space before paren), single quotes, trailing commas, mandatory braces; aligned with the industry standard and compatible with oxlint/oxfmt.
- **Defensive set** — `eslint:recommended` plus ~20 rules from the JavaScript codeguide: error prevention, modern syntax (`prefer-object-has-own`, `logical-assignment-operators`), clean code (`no-else-return`, `no-implicit-coercion`).
- **TypeScript** — `typescript-eslint` strict + stylistic type-checked sets. Enabled `consistent-type-imports` and `consistent-type-exports`. `any`-related rules report as warnings to allow gradual cleanup.
- **Node.js** — `eslint-plugin-n` (with `no-process-env`, `no-sync`, `prefer-global/*`) and `eslint-plugin-unicorn` recommended set. Built-in objects must be imported explicitly (only `console` stays global).
- **React / Vue / Angular** — `@eslint-react/eslint-plugin` v5, `eslint-plugin-jsx-a11y` for accessibility, expanded JSX formatting via `@stylistic/jsx-*`, `PASCAL_CASE` for component files.
- **File naming** — `KEBAB_CASE` for source files; `PASCAL_CASE` for `*.{jsx,tsx,vue}` in React presets.

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

## Known issues

`eslint-plugin-jsx-a11y` (used in `react` and `react-typescript`) declares its `eslint` peer dependency as `^3 || ... || ^9` and has not yet advertised support for ESLint 10, although it works correctly. Until the upstream plugin is updated, install with `--legacy-peer-deps`:

```bash
npm install -D eslint eslint-config-htmlacademy --legacy-peer-deps
```

The other four presets (`vanilla`, `typescript`, `node`, `node-typescript`) install without the flag.

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [ESLint Documentation](https://eslint.org/docs/latest/)
