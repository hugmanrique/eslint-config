const base = require('./index');

// Replace parser and add recommended rules
base.parser = '@typescript-eslint/parser';

base.plugins.push('@typescript-eslint');
base.extends.push('plugin:@typescript-eslint/eslint-recommended'); // disable conflicting eslint:recommended rules
base.extends.push('plugin:@typescript-eslint/recommended');
base.extends.push('prettier/@typescript-eslint'); // disable conflicting rules

module.exports = base;