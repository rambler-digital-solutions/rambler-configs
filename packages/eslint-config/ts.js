/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}
    ],
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'prefer-destructuring': 'off',
        '@typescript-eslint/prefer-destructuring': [
          'error',
          {array: true, object: true},
          {
            enforceForRenamedProperties: true,
            enforceForDeclarationWithTypeAnnotation: true
          }
        ],
        '@typescript-eslint/no-magic-numbers': [
          'error',
          {
            ignore: [0, 1],
            enforceConst: true,
            ignoreDefaultValues: true,
            ignoreClassFieldInitialValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreTypeIndexes: true
          }
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {allowExpressions: true}
        ]
      }
    }
  ]
}
