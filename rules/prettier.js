module.exports = {
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ]
  }
};
