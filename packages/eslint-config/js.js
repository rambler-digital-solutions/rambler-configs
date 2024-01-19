/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
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
    'plugin:security/recommended-legacy'
  ],
  plugins: ['promise', 'unicorn'],
  rules: {
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-empty': ['error', {allowEmptyCatch: true}],
    curly: ['error', 'all'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'always'],
    camelcase: ['error', {ignoreDestructuring: true}],
    eqeqeq: ['error', 'always', {null: 'ignore'}],
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
    'prefer-promise-reject-errors': 'error',
    'object-shorthand': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, 2],
        enforceConst: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true
      }
    ],
    'dot-notation': 'error',
    /* eslint-disable no-magic-numbers */
    'max-depth': ['error', 3],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    /* eslint-enable no-magic-numbers */
    'max-classes-per-file': 'error',
    'require-await': 'error',
    'new-cap': 'error',
    'no-prototype-builtins': 'off',
    'no-global-assign': 'error',
    'no-extend-native': 'error',
    'no-alert': 'error',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'no-unsafe-optional-chaining': [
      'error',
      {disallowArithmeticOperators: true}
    ],
    'no-unused-expressions': ['error', {enforceForJSX: true}],
    'no-sequences': ['error', {allowInParentheses: false}],
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        disallowTemplateShorthand: false
      }
    ],
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
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'no-empty-function': ['error', {allow: ['arrowFunctions']}],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-unused-modules': [
      'error',
      {missingExports: false, unusedExports: true}
    ],
    'import/no-unresolved': ['error', {caseSensitiveStrict: true}],
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
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/no-multiple-resolved': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'unicorn/error-message': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/filename-case': [
      'error',
      {cases: {kebabCase: true, camelCase: true, pascalCase: true}}
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          args: true,
          props: true,
          Props: true,
          req: true,
          res: true
        },
        ignore: ['\\.e2e$', '\\.e2e-spec$'],
        checkShorthandProperties: true
      }
    ],
    'sonar/anchor-precedence': 'error',
    'sonar/bool-param-default': 'error',
    'sonar/concise-regex': 'error',
    'sonar/disabled-auto-escaping': 'error',
    'sonar/disabled-resource-integrity': 'error',
    'sonar/destructuring-assignment-syntax': 'error',
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
  },
  overrides: [
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
        'no-magic-numbers': 'off',
        'max-classes-per-file': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off'
      }
    },
    {
      files: ['**/__stories__/**', '*.story.*'],
      rules: {
        'import/no-unused-modules': 'off'
      }
    }
  ]
}
