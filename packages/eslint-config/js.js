/* eslint-disable no-magic-numbers */

module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:sonar/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended'
  ],
  rules: {
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-empty': ['error', {allowEmptyCatch: true}],
    'prefer-const': ['error', {ignoreReadBeforeAssign: true}],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-rest-params': 'error',
    'prefer-object-spread': 'error',
    'prefer-destructuring': [
      'error',
      {array: true, object: true},
      {enforceForRenamedProperties: true}
    ],
    'prefer-arrow-callback': 'error',
    curly: ['error', 'all'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'always'],
    camelcase: ['error', {ignoreDestructuring: true}],
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1],
        enforceConst: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true
      }
    ],
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'dot-notation': 'error',
    'max-depth': ['error', 2],
    'max-nested-callbacks': ['error', 2],
    'max-classes-per-file': 'error',
    'max-params': ['error', 3],
    'require-await': 'error',
    'multiline-comment-style': ['error', 'starred-block'],
    'no-prototype-builtins': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let']
      },
      {
        blankLine: 'always',
        prev: 'expression',
        next: ['const', 'let']
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: 'expression'
      }
    ],
    'import/no-unresolved': ['error', {caseSensitiveStrict: true}],
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/no-default-export': 'error',
    'import/no-unused-modules': [
      'error',
      {missingExports: false, unusedExports: true}
    ],
    'import/no-anonymous-default-export': [
      'error',
      {allowCallExpression: false}
    ],
    'import/newline-after-import': ['error', {considerComments: true}],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'index',
          'sibling'
        ],
        'newlines-between': 'ignore'
      }
    ],
    'sonar/anchor-precedence': 'error',
    'sonar/bool-param-default': 'error',
    'sonar/concise-regex': 'error',
    'sonar/disabled-auto-escaping': 'error',
    'sonar/disabled-resource-integrity': 'error',
    /**
     * правило невозможно отключить для отдельных случаев,
     * при использовании webpack EnvironmentPlugin необходимо
     * использовать process.env.SOME_VAR без деструктуризации
     * https://github.com/webpack/webpack/issues/14800
     */
    'sonar/destructuring-assignment-syntax': 'off',
    'sonar/empty-string-repetition': 'error',
    'sonar/function-name': [
      'error',
      {format: '^_?\\$?[a-zA-Z][a-zA-Z0-9]*\\$?$'}
    ],
    'sonar/function-return-type': 'error',
    'sonar/link-with-target-blank': 'error',
    'sonar/max-union-size': 'off',
    'sonar/no-clear-text-protocols': 'error',
    'sonar/no-empty-after-reluctant': 'error',
    'sonar/no-function-declaration-in-block': 'error',
    'sonar/no-global-this': 'error',
    'sonar/no-globals-shadowing': 'error',
    'sonar/no-hardcoded-credentials': 'error',
    'sonar/no-hardcoded-ip': 'error',
    'sonar/no-incorrect-string-concat': 'error',
    'sonar/no-invariant-returns': 'error',
    'sonar/non-number-in-arithmetic-expression': 'error',
    'sonar/post-message': 'error',
    'sonar/prefer-type-guard': 'error',
    'sonar/redundant-type-aliases': 'error',
    'sonar/stateful-regex': 'error',
    'sonar/unused-named-groups': 'error',
    'sonar/xpath': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'off',
    'security/detect-bidi-characters': 'error'
  }
}
