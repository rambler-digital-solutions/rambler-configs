import path from 'node:path'
import {fileURLToPath} from 'node:url'
import tseslint from 'typescript-eslint'
import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import preferFC from 'eslint-plugin-react-prefer-function-component'
import storybook from 'eslint-plugin-storybook'
import eslintConfigPrettier from 'eslint-config-prettier'
import ssrFriendly from 'eslint-plugin-ssr-friendly'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const reactConfig = [
  reactPlugin.configs.flat.recommended,
  ...storybook.configs['flat/recommended'],
  preferFC.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends(
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ),
  {
    languageOptions: {
      parser: tseslint.parser
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'jsx-a11y': jsxA11y,
      'ssr-friendly': ssrFriendly
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-pascal-case': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-target-blank': 'off',
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
    }
  },
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

export {reactConfig}
