# ESLint Config for HTML Academy Codeguide

[![npm version](https://img.shields.io/npm/v/eslint-config-htmlacademy.svg)](https://www.npmjs.com/package/eslint-config-htmlacademy)
[![CI](https://github.com/htmlacademy/eslint-config-htmlacademy/actions/workflows/ci.yml/badge.svg)](https://github.com/htmlacademy/eslint-config-htmlacademy/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/eslint-config-htmlacademy.svg)](https://github.com/htmlacademy/eslint-config-htmlacademy/blob/main/LICENSE)

[ESLint](https://eslint.org) shareable configuration for JavaScript validation according to [HTML Academy Codeguide](https://codeguide.academy).

Version 11 uses [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) and is not compatible with `.eslintrc`.

## Requirements

- Node.js >= 24
- ESLint >= 10

## Installation

```bash
npm install -D eslint eslint-config-htmlacademy
```

## Configurations

| Name | Export | Description |
| --- | --- | --- |
| vanilla | `vanilla` | Browser JavaScript |
| node | `node` | Node.js + TypeScript |
| react | `react` | React |
| react-typescript | `reactTypescript` | React + TypeScript |

ES5 and ES6 configurations were removed in v11.

## Usage

Create `eslint.config.js` in your project root.

### Vanilla

```js
// eslint.config.js
import {vanilla} from 'eslint-config-htmlacademy';

export default [
  ...vanilla,
  {
    // your overrides
  },
];
```

### Node

For Node.js projects with TypeScript. Extends `vanilla` with `typescript-eslint`.

```bash
npm install -D typescript
```

```js
// eslint.config.js
import {node} from 'eslint-config-htmlacademy';

export default [
  ...node,
];
```

### React

Extends `vanilla` with `@eslint-react/eslint-plugin`.

```js
// eslint.config.js
import {react} from 'eslint-config-htmlacademy';

export default [
  ...react,
];
```

### React + TypeScript

Extends `react` with `typescript-eslint`.

```bash
npm install -D typescript
```

```js
// eslint.config.js
import {reactTypescript} from 'eslint-config-htmlacademy';

export default [
  ...reactTypescript,
];
```

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [ESLint Documentation](https://eslint.org/docs/latest/)
