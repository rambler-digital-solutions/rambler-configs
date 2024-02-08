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
        'plugin:import/typescript'
      ],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}
        ],
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'error',
          {
            ignore: [0, 1, -1, 2, 24, 60, 1000],
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
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {allowExpressions: true}
        ],
        'import/no-unresolved': 'off'
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
    }
  ],
  ignorePatterns: ['*.d.ts']
}
