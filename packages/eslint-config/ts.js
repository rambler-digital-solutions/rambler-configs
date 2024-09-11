/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier'
      ],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
          'error',
          {allow: ['arrowFunctions']}
        ],
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'error',
          {
            ignore: [0, 1, -1, 2, 24, 60, 100, 1000],
            enforceConst: true,
            ignoreDefaultValues: true,
            ignoreClassFieldInitialValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreTypeIndexes: true
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {'ts-expect-error': 'allow-with-description'}
        ]
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
        '@typescript-eslint/no-magic-numbers': 'off'
      }
    },
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx'],
      extends: ['plugin:@typescript-eslint/disable-type-checked']
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  ignorePatterns: ['*.d.ts']
}
