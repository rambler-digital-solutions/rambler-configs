module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-a11y/recommended',
    'stylelint-config-prettier'
  ],
  rules: {
    'alpha-value-notation': 'number',
    'custom-property-pattern': null,
    'font-family-name-quotes': 'always-where-required',
    'length-zero-no-unit': true,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'value-keyword-case': null
  }
}
