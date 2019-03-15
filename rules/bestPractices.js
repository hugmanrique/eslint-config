module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next'
      }
    ],
    'no-unused-expressions': 2,
    'no-param-reassign': 2,
    'arrow-body-style': 2,
    'no-shadow': [
      1,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
      }
    ],
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
    'no-console': 0
  }
};
