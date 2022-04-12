module.exports = {
    extends: [
      'htmlacademy/vanilla',
      'plugin:@typescript-eslint/recommended',
      'plugin:node/recommended',
    ],
    rules: {
      // Possible Errors
      // ------------------------------------------
      'no-console': 'off',
      'no-shadow': 'off',
      'node/handle-callback-err': ['error', "^.*(e|E)rr"],
      'node/no-callback-literal': 'error',
      'node/no-exports-assign': 'off',
      'node/no-extraneous-import': 'off',
      'node/no-extraneous-require': 'off',
      'node/no-missing-import': 'off',
      'node/no-missing-require': 'off',
      'node/no-new-require': 'off',
      'node/no-path-concat': 'error',
      'node/no-process-exit': 'error',
      'node/no-unpublished-bin': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-unpublished-require': 'off',
      'node/no-unsupported-features/es-builtins': 'off',
      'node/no-unsupported-features/node-builtins': 'off',
      'node/process-exit-as-throw': 'error',
      'node/shebang': 'off',
      // Stylistic Issues
      // ------------------------------------------
      'node/callback-return': 'error',
      'node/exports-style': 'off',
      'node/file-extension-in-import': ['error', 'always'],
      'node/global-require': 'error',
      'node/no-mixed-requires': 'error',
      'node/no-process-env': 'off',
      'node/no-restricted-import': 'off',
      'node/no-restricted-require': 'off',
      'node/no-sync': 'off',
      'node/prefer-global/buffer': 'error',
      'node/prefer-global/text-decoder': 'error',
      'node/prefer-global/text-encoder': 'error',
      'node/prefer-global/url-search-params': 'error',
      'node/prefer-global/url': 'error',
      'node/prefer-promises/dns': 'error',
      'node/prefer-promises/fs': 'error',
      // Typescript
      // ------------------------------------------
      '@typescript-eslint/no-empty-interface': 'off',      
      '@typescript-eslint/no-shadow': 'error'
    }
  };
