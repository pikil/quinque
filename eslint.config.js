import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default defineConfig([
  globalIgnores([
    'build/',
    '.svelte-kit/',
    'package/',
    'static/'
  ]),

  js.configs.recommended,
  svelte.configs.recommended,

  {
    languageOptions: {
      globals: globals.browser
    }
  },

  {
    rules: {
      'no-param-reassign': 'off',
      'no-void': 'off',
      'no-nested-ternary': 'off',
      'max-classes-per-file': 'off',

      'prefer-promise-reject-errors': 'off',

      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      'object-curly-spacing': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'indent': ['error', 2, { SwitchCase: 1 }],
      'operator-linebreak': ['error', 'before'],
      'no-underscore-dangle': 'off',
      'no-continue': 'off',
      'no-console': 'error',
      'linebreak-style': 'off',
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
      'radix': 'error',
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
  },

  // Overrides must stay below the shared rules: later blocks win.
  {
    files: ['**/*.svelte'],
    rules: { 'no-useless-assignment': 'off' }
  },

  {
    files: ['**/*.svelte', '**/*.svelte.js'],
    rules: {
      // Core prefer-const flags the idiomatic `let { x } = $props()` and `let y = $derived(...)`.
      'prefer-const': 'off',
      'svelte/prefer-const': 'error'
    }
  },

  {
    files: ['*.config.js'],
    languageOptions: {
      globals: globals.node
    }
  }
])
