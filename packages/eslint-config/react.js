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
  rules: {
    'react/prop-types': 0,
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
    ]
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
