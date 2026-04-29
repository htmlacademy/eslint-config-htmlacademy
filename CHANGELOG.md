# Changelog

## 11.0.0

Major rewrite. Migration to ESLint flat config, alignment with current industry style, and a redesigned set of six presets that split TypeScript-aware configurations from plain JavaScript ones.

### Breaking changes

- Requires ESLint >= 10 and Node.js >= 24.
- Flat config only (`eslint.config.js`); legacy `.eslintrc` is no longer supported.
- Removed `es5`, `es5.5`, `es6` presets — `vanilla` is the single base.
- New preset architecture, exposed as subpath imports:
  ```js
  import preset from 'eslint-config-htmlacademy/<preset-name>';
  ```
  The previous `import {vanilla} from 'eslint-config-htmlacademy'` API is gone. Available presets: `vanilla`, `typescript`, `node`, `node-typescript`, `react`, `react-typescript`.
- Adopted industry style: `function-call-spacing: 'never'` (`foo()`, not `foo ()`), backticks only for template literals with interpolation.
- All formatting rules moved to `@stylistic/eslint-plugin`.
- React: replaced `eslint-plugin-react` with `@eslint-react/eslint-plugin`.

### Presets

- **`vanilla`** — plain browser JavaScript. Adds ~20 defensive and modern-syntax rules on top of `eslint:recommended`: `array-callback-return`, `no-promise-executor-return`, `no-implicit-coercion`, `no-else-return`, `prefer-object-has-own`, `prefer-object-spread`, `logical-assignment-operators`, and others. Browser globals are now provided automatically.
- **`typescript`** (new) — browser TypeScript without a framework. Enables `tseslint.configs.strictTypeChecked` and `stylisticTypeChecked` (~150 type-aware rules). Uses `parserOptions.projectService: true` — auto-discovers TS projects, including monorepos. `any`-related rules (`no-unsafe-*`) are downgraded to `warn` for gradual cleanup. Inherited by `node-typescript` and `react-typescript`.
- **`node`** / **`node-typescript`** — Node.js. Enables `unicorn/recommended` and Node-specific rules from `eslint-plugin-n` v17: `no-process-env`, `no-sync`, `no-new-require`, `prefer-global/*` policy "imports required" (with `console` as the only exception). `no-console` lowered to a warning, `unicorn/prefer-node-protocol` enforced.
- **`react`** / **`react-typescript`** — React, Vue, Angular. Updated to `@eslint-react` v5 with its new flat-config preset structure. Added `eslint-plugin-jsx-a11y` (recommended set) covering the codeguide accessibility section (`alt`, `<label>`/`<input>` association, ARIA, button type, iframe sandbox, target=_blank). Expanded JSX formatting via `@stylistic/jsx-*`. Component file names enforced as `PASCAL_CASE`.

### Dependencies

- Added `globals`, `eslint-plugin-jsx-a11y`.
- Updated `@eslint-react/eslint-plugin` to v5 (new flat-config preset structure).

### Tests

- Test runner rewritten on ESLint Node API + `node:test`. Each fixture declares `// expected: <rule>` (must fire) or `// valid` (must produce no errors).

---

10.0.1 / 2023-09-19
==================

  * Дополнили настройку `check-file/filename-naming-convention` в конфигурационном файле `vanilla`

10.0.0 / 2023-09-05
==================

  * Добавили eslint-плагин `check-file`
  * Добавили правила в конфигурационном файле `vanilla`
    * `check-file/filename-naming-convention`
    * `check-file/folder-naming-convention`
  * Обновили версии `eslint` и ECMAScript

9.1.1 / 2023-05-02
==================

  * Добавили правило в конфигурационном файле `node`
    * `@typescript-eslint/no-unused-vars` с уровнем ошибки `warn` и дополнительным объектом конфигурации `'argsIgnorePattern': '^_'`

9.1.0 / 2023-05-02
==================

  * Добавили eslint-плагин `eslint-plugin-unicorn`
  * Добавили правило в конфигурационном файле `node`
    * `unicorn/prefer-node-protocol` со значением `warn`

9.0.0 / 2023-02-03
==================

  * Добавили правила в конфигурационном файле `vanila`
    * `brace-style`
    * `space-in-prarens`

8.0.0 / 2022-10-11
==================

  * Заменит тип проверки для правила `@typescript-eslint/no-explicit-any` с `warn` на `error`

7.0.0 / 2022-09-26
==================

  * Добавили набор правил `recommended-requiring-type-checking` плагина `plugin:@typescript-eslint`
  * Добавили правила в конфигурационном файле react-typescript
    * `@typescript-eslint/member-delimiter-style`
    * `@typescript-eslint/no-useless-empty-export`
  * Отключили правило в конфигурционном файле react-typescript
    * `@typescript-eslint/no-floating-promises`

6.0.0 / 2022-06-20
==================

  * Добавили правила в конфигурационном файле vanila
    * `no-multi-spaces`
    * `space-infix-ops`
  * Отключили правило в конфигурационном файле react
    * `react/function-component-definition`

5.1.2 / 2022-04-12
==================

  * Отключили правила в конфигурационном файле node
    * `no-shadow`

5.1.1 / 2022-04-11
==================

  * Отключили правило в конфигурационном файле node
    * `no-empty-interface`

5.1.0 / 2022-03-31
==================

  * добавили конфигурационный файл node

5.0.0 / 2021-11-17
==================

  * Убрали запрет и требование висячей запятой. Теперь она по желанию
  * Подняли версию ES до 2019
  * Добавили новые правила
    * `no-unused-expressions`
    * `no-return-assign`

4.1.0 / 2021-09-29
==================

  * добавили конфигурационный файл react-typescript

4.0.2 / 2021-06-17
==================

  * разрешили использовать поднятие функции (hoisting)

4.0.1 / 2021-05-31
==================

  * remove rule `id-length` for Vanila JS, because it contraries to our criteria

4.0.0 / 2021-05-24
==================

  * add new rules for Vanila JS:
  * `no-template-curly-in-string`
  * `accessor-pairs`
  * `curly`
  * `eqeqeq`
  * `no-alert`
  * `no-useless-concat`
  * `no-useless-return`
  * `radix`
  * `strict`
  * `no-shadow`
  * `no-use-before-define`
  * `camelcase`
  * `id-length`
  * `lines-between-class-members`
  * `no-nested-ternary`
  * `no-unneeded-ternary`
  * `arrow-body-style`
  * `prefer-template`

  * add configuration for projects that use react and add the following rules:
  * `react/no-access-state-in-setstate`
  * `react/no-array-index-key`
  * `react/no-unused-prop-types`
  * `react/jsx-boolean-value`
  * `react/jsx-closing-bracket-location`
  * `react/jsx-closing-tag-location`
  * `react/jsx-curly-newline`
  * `react/jsx-no-useless-fragment`
  * `react/function-component-definition`
  * `react/jsx-wrap-multilines`

3.0.0 / 2021-03-22
==================

  * enable rules:
  * `prefer-arrow-callback`
  * `eol-last`
  * `no-multiple-empty-lines`
  * `semi`
  * `semi-style`
  * `no-trailing-spaces`
  * `arrow-parens`

2.1.0 / 2021-01-27
==================

  * returned old configurations for backward compatibility for our inner tools. Please **don't use that configurations in real projects** they are deprecated.

2.0.0 / 2021-01-20
==================

  * redesign API
  * update README.md according to new API design

1.0.0 / 2021-01-08
==================

  * 1.0.0
  * update eslint to 7.16.0
  * adds ES9 configuration extending eslint:recommended rules
  * adds tests for es9 configuration
  * updates README.md according to new configuration
  * fixes tests for es5 and es6 configurations

0.6.0 / 2020-09-09
==================

  * 0.6.0
  * add temporary rules version for js-1 course

0.5.2 / 2018-04-04
==================

  * 0.5.2
  * fixes [#36](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/36)
  * update tests

0.5.1 / 2018-04-03
==================

  * 0.5.1
  * add some notes
  * fixes [#36](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/36)
  * [#36](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/36) test first

0.5.0 / 2018-04-03
==================

  * 0.5.0
  * fixes [#35](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/35)
  * [#35](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/35) test first

0.4.2 / 2018-01-11
==================

  * 0.4.2
  * adds node.js configuration

0.4.1 / 2018-01-11
==================

  * 0.4.1
  * updates readme according to new config

0.4.0 / 2018-01-11
==================

  * 0.4.0
  * added node environment rules

0.3.2 / 2017-11-02
==================

  * 0.3.2
  * updates comment

0.3.1 / 2017-09-13
==================

  * 0.3.1
  * Merge pull request [#32](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/32) from dihar/fix-no-unused-vars
    fixes [#31](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/31)
  * fixes [#31](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/31)
  * adds more tests

0.3.0 / 2017-07-10
==================

  * 0.3.0
  * Merge pull request [#17](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/17) from htmlacademy/feature/move-to-4
    Feature/move to 4
  * update readme
  * update eslint to 4.2.0
  * get rid of `babel-parser`
  * [#15](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/15) fixes
  * Merge pull request [#16](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/16) from htmlacademy/feature/check-unused-params
    Feature/check unused params
  * minor
  * closes [#12](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/12)
  * [#13](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/13) fixed
  * added deploy script
  * Merge pull request [#11](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/11) from htmlacademy/feature/check-unused-params
    Unused function args validation
  * adds validator for unused function args

0.2.3 / 2017-03-06
==================

  * 0.2.3
  * fixes [#9](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/9)
  * added test on [#10](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/10)

0.2.2 / 2016-12-27
==================

  * 0.2.2
  * closes [#6](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/6)
  * reformat config as defined style
  * fix [#7](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/7)

0.2.1 / 2016-11-30
==================

  * 0.2.1
  * fix continuation indent
  * fix [#3](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/3)
    object array spacing and destructuring spacing tests

0.2.0 / 2016-11-25
==================

  * 0.2.0
  * minor
  * Merge branch 'master' into version-0.2
  * refactor rename
  * fix links
  * fixed [#4](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/4)
  * fixed tests
  * travis badge
  * fix version
  * enable tests

0.1.8 / 2016-11-22
==================

  * 0.1.8
  * fixed [#5](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/5)

0.1.7 / 2016-11-04
==================

  * 0.1.7
  * fixed [#1](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/1)
    moved to newer ESLint version

0.1.6 / 2016-11-03
==================

  * 0.1.6
  * fixed [#1](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/1)

0.1.5 / 2016-11-03
==================

  * 0.1.5
  * removed TODOs
  * fixed [#1](https://github.com/htmlacademy/eslint-config-htmlacademy/issues/1)
  * eslint semver update

0.1.4 / 2016-10-30
==================

  * 0.1.4
  * no-console error
  * space-before-paren
  * fix reference
  * do not require jsdoc

0.1.3 / 2016-10-28
==================

  * 0.1.3
  * full rules
  * num -> string

0.1.2 / 2016-10-27
==================

  * 0.1.2
  * added default config

0.1.1 / 2016-10-27
==================

  * 0.1.1
  * updated info
  * split to es5 ans es6

0.1.0 / 2016-10-27
==================

  * fixed https://github.com/htmlacademy/yomoyo/issues/92
  * sort and optimize rules
  * comma-dangle fix
  * move es6 rules to separate file
  * use strict
  * style updates
  * initial strict config
  * added package.json
  * added gitignore
  * Initial commit
