/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['eslint-comments', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    // TypeScript
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/prefer-interface': 'off',

    // ESLint comments
    'eslint-comments/no-unused-disable': 'warn',

    // Other
    'array-callback-return': 'warn',
    camelcase: 'off',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'guard-for-in': 'warn',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-const-assign': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'no-new': 'warn',
    'no-proto': 'warn',
    'no-return-assign': 'warn',
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'no-unneeded-ternary': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'off',
    radix: 'warn',
    yoda: 'warn',
  },
};
