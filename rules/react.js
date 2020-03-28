module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  env: {
    jest: true
  },
  rules: {
    'react/display-name': 1,
    'react/prop-types': [
      2,
      {
        ignore: ['className', 'children']
      }
    ],
    'react/prefer-stateless-function': 2,
    // Optional props declared in PropTypes should have a default value
    'react/require-default-props': [
      1,
      {
        // Forbid prop default for a required prop
        forbidDefaultForRequired: true
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 2,
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 1
  }
};
