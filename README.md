# warung-config

> Configuration files for various tools used at Warung Pintar.

## Installation

### ESLint

Install `eslint` and `warung-config-eslint` using your favourite package manager:

```bash
# npm
npm install --save-dev eslint prettier warung-config-eslint

# yarn
yarn add --dev eslint prettier warung-config-eslint
```

Then, in your `.eslintrc` file, extend the config.

```json
{
  "extends": ["warung-config-eslint"]
}
```

#### React/React Native

If you're working on a React project, extend `warung-config-eslint/react` instead.

```json
{
  "extends": ["warung-config-eslint/react"]
}
```

Similar thing for React Native projects, but with `warung-config-eslint/react-native`.

```json
{
  "extends": ["warung-config-eslint/react-native"]
}
```

### TypeScript

To use the tsconfig file provided here, install `warung-config-tsconfig` with your favourite package manager.

```bash
# npm
npm install --save-dev warung-config-tsconfig

# yarn
yarn add --dev warung-config-tsconfig
```

Then, extend it in your `tsconfig.json`.

```json
{
  "extends": "warung-config-tsconfig/tsconfig.json"
}
```

### Prettier

[Prettier](https://prettier.io) is a tool to automatically format your code during save. It supports various editors, from VSCode, Atom, Sublime, and even Emacs.

We also supply a Prettier config for you to use in your projects. Install Prettier and `warung-config-prettier` into your project.

```bash
# npm
npm install --save-dev prettier warung-config-prettier

# yarn
yarn add --dev prettier warung-config-prettier
```

Then, in your `package.json`, add the following key.

```json
{
  "prettier": "warung-config-prettier"
}
```

If you would like to extend/override the Prettier config provided, you will have to add the config in a `.prettierrc.js` file, then extend with your own configs. For example:

```js
module.exports = {
  ...require('warung-config-prettier'),
  semi: false,
};
```
