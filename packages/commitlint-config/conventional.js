module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']]
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#', '[A-Z]{2,10}-']
    }
  }
}
