module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react'
  ],
  plugins: ['babel', 'prettier', 'react', 'react-hooks', 'import'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  // 0 = 'off', 1 = 'warn', 2 = 'error'
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
    'no-console': 0,

    // # Import rules
    // This rule is heavily broken when using webpack/any other resolver
    'import/no-unresolved': 0,

    // # React rules
    'react/display-name': 1,
    'react/prop-types': [
      2,
      {
        ignore: ['className', 'children']
      }
    ],
    // Optional props declared in PropTypes should have a default value
    'react/require-default-props': [
      1,
      {
        // Forbid prop default for a required prop
        forbidDefaultForRequired: true
      }
    ],
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',

    // # Prettier rules
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        printWidth: 100
      }
    ]
  }
};
