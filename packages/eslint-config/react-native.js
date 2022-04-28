/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: './react',
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  rules: {
    // React Native (eslint-plugin-react-native)
    'react-native/no-unused-styles': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
  },
};