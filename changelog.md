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
