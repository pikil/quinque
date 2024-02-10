/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'operator-linebreak': ['error', 'before'],
    'no-underscore-dangle': 'off',
    'no-continue': 'off',
    'no-console': 'error',
    'linebreak-style': ['off', 'error', 'windows'],
    'curly': 'off',
    'func-names': ['error', 'never'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'comma-dangle': [2, 'never'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'prefer-template': 'off',
    'max-len': ['error', { code: 150 }],
    'nonblock-statement-body-position': ['error', 'below'],
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-plusplus': 'off',
    'radix': ['error', 'as-needed'],
    'quote-props': ['error', 'consistent'],
    'prefer-const': 'error',
    'no-prototype-builtins': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want.Use Object.{keys,values,entries}'
          + 'and iterate over the resulting array.'
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them.'
          + 'Separately, loops should be avoided in favor of array iterations.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ]
  }
}
