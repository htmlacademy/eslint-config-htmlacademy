# eslint-config-htmlacademy

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [HTML Academy](http://htmlacademy.ru) courses

## Installation

```bash
npm install --save-dev eslint-config-htmlacademy
```

Package requires `eslint`. You must install it manually.

## Usage

Once the `eslint-config-htmlacademy` package is installed, you can use it by specifying `htmlacademy` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

For validating **Vanilla JS** project use `vanilla` version:

```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "env": {
    "es2017": true,
    "browser": true
  },
  "extends": "htmlacademy/vanilla",
  "rules": {
    // Additional rules...
  }
}
```

For validating **React** project use `react` version (`htmlacademy/react` includes `react/recommended`):

```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "env": {
    "es2017": true,
    "browser": true
  },
  "extends": "htmlacademy/react",
  "rules": {
    // Additional rules...
  }
}
```

For validating **React** project with TypeScript use `react-typescript` version (`htmlacademy/react-typescript` includes `react/recommended` and `@typescript-eslint/recommended`):

```json
{
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "es2017": true,
    "browser": true
  },
  "extends": "htmlacademy/react-typescript",
  "rules": {
    // Additional rules...
  }
}
```

Caution! `htmlacademy/react` and `htmlacademy/react-typescript` doesn't include `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` because in our courses we use CRA (Create React App) which includes these plugins out of box. Install them yourself if necessary.

**Node.js** versions soon.
