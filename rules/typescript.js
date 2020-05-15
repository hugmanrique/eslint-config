module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended', // disable conflicting eslint:recommended rules
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint' // disable conflicting rules
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          1,
          {
            // Prefer TS' type inference
            allowExpressions: true
          }
        ]
      }
    }
  ]
}