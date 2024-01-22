/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:ssr-friendly/recommended',
    'plugin:react-prefer-function-component/recommended'
  ],
  plugins: ['@arthurgeron/react-usememo'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'error',
    'react/no-multi-comp': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useDeferCallback)'
      }
    ],
    'jsx-a11y/no-autofocus': [
      'error',
      {
        ignoreNonDOM: true
      }
    ],
    '@arthurgeron/react-usememo/require-usememo': 'error'
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}
