const base = require('./index');

// Replace parser and add recommended rules
base.parser = '@typescript-eslint/parser';

base.extends.push('@typescript-eslint/recommended');
base.extends.push('prettier/@typescript-eslint'); // disable conflicting rules

module.exports = base;