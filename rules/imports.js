module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['import'],
  rules: {
    // This rule is heavily broken when using webpack/any other module resolver
    'import/no-unresolved': 0
  }
};
