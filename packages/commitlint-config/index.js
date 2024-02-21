module.exports = {
  extends: ['./conventional.js'],
  rules: {
    'type-empty': [0]
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*)$/,
      headerCorrespondence: ['subject'],
      issuePrefixes: ['#', '[A-Z]{2,10}-']
    }
  }
}
