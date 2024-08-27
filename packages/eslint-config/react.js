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
    'plugin:react-prefer-function-component/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-multi-comp': 'error',
    'react/hook-use-state': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useDeferCallback)'
      }
    ],
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true
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
    },
    {
      files: [
        '**/test/**',
        '**/tests/**',
        '**/spec/**',
        '**/__tests__/**',
        '**/__stories__/**',
        '*.test.*',
        '*.spec.*',
        '*.story.*',
        '*.e2e.*',
        '*.e2e-spec.*'
      ],
      rules: {
        'react/no-multi-comp': 'off'
      }
    },
    {
      files: ['**/__stories__/**', '*.story.*'],
      rules: {
        'import/no-unused-modules': 'off',
        'import/no-anonymous-default-export': 'off',
        'storybook/default-exports': 'off'
      }
    }
  ]
}
