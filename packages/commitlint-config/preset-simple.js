module.exports = {
  name: 'conventional-changelog-conventionalcommits',
  parserOpts: {
    headerPattern: /^(.*)$/,
    headerCorrespondence: ['subject'],
    issuePrefixes: ['#', '[A-Z]{2,10}-']
  }
}
