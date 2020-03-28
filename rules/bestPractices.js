module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-restricted-syntax': [
      2,
      "BinaryExpression[operator='in']",
      'WithStatement'
    ],
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next',
        ignoreRestSiblings: true
      }
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-param-reassign': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-shadow': [
      1,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
      }
    ],
    'no-console': 0,
    // Stylistic choices
    'arrow-body-style': [2, 'as-needed'],
    quotes: [
      2,
      'single',
      {
        // Allow double-quotes if the string contains a single-quote that would have to be escaped
        avoidEscape: true,
        // Allow strings to use backticks
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': [2, 'never'],
  }
};
