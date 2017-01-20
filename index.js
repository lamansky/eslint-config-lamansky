'use strict'

module.exports = {
  extends: 'standard',
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'standard/array-bracket-even-spacing': 0,
    'array-callback-return': 2,
    'comma-dangle': [2, 'always-multiline'],
    'computed-property-spacing': [2, 'never'],
    'standard/computed-property-even-spacing': 0,
    'dot-notation': 2,
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      allowBlockStart: true,
    }],
    'lines-around-directive': [2, 'always'],
    'no-alert': 2,
    'no-case-declarations': 2,
    'no-eq-null': 2,
    'no-extra-label': 2,
    'no-invalid-this': 2,
    'no-mixed-operators': 2,
    'no-mixed-requires': 2,
    'no-negated-condition': 2,
    'no-lonely-if': 2,
    'no-unused-labels': 2,
    'no-useless-return': 2,
    'no-new': 2,
    'no-shadow': [2, {
      allow: ['resolve', 'reject'],
    }],
    'no-undefined': 2,
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': [1, {
      terms: ['todo'],
    }],
    'object-shorthand': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'prefer-const': 2,
    'prefer-destructuring': [2, {
      array: false,
      object: true,
    }],
    'quote-props': [2, 'as-needed'],
    'strict': [2, 'global'],
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturnDescription: false,
    }],
  },
}
