module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: './preset-conventional',
  rules: {
    'references-empty': [2, 'never'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']]
  }
}
