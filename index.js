module.exports = {
  extends: [
    './rules/bestPractices',
    './rules/imports',
    './rules/react',
    './rules/prettier'
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
};
