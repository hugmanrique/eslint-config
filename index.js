module.exports = {
  extends: [
    './rules/bestPractices',
    './rules/imports',
    './rules/react',
    './rules/prettier',
    './rules/typescript'
  ].map(require.resolve),
  plugins: [],
  overrides: [],
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
