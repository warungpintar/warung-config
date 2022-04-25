# warung-config

> Configuration files for various tools used at Warung Pintar.

## Installation

### ESLint

Install `eslint` and `@warungpintar/eslint-config` using your favourite package manager:

```bash
# npm
npm install --save-dev eslint @warungpintar/eslint-config

# yarn
yarn add --dev eslint @warungpintar/eslint-config
```

Then, in your `.eslintrc` file, extend the config.

```json
{
  "extends": ["@warungpintar/eslint-config"]
}
```

> **A note about Prettier**
>
> This ESLint config also includes the Prettier plugin for ESLint. To make this config work, make sure you also have Prettier configured. [Click here](#prettier) to read how.

#### React/React Native

If you're working on a React project, extend `@warungpintar/eslint-config/react` instead.

```json
{
  "extends": ["@warungpintar/eslint-config/react"]
}
```

Similar thing for React Native projects, but with `@warungpintar/eslint-config/react-native`.

```json
{
  "extends": ["@warungpintar/eslint-config/react-native"]
}
```

### TypeScript

To use the tsconfig file provided here, install `@warungpintar/typescript-config` with your favourite package manager.

```bash
# npm
npm install --save-dev @warungpintar/typescript-config

# yarn
yarn add --dev @warungpintar/typescript-config
```

Then, extend it in your `tsconfig.json`.

```json
{
  "extends": "@warungpintar/typescript-config/tsconfig.json"
}
```

### Prettier

[Prettier](https://prettier.io) is a tool to automatically format your code during save. It supports various editors, from VSCode, Atom, Sublime, and even Emacs.

We also supply a Prettier config for you to use in your projects. Install Prettier and `warung-config-prettier` into your project.

```bash
# npm
npm install --save-dev prettier @warungpintar/prettier-config

# yarn
yarn add --dev prettier @warungpintar/prettier-config
```

Then, in your `package.json`, add the following key.

```json
{
  "prettier": "@warungpintar/prettier-config"
}
```

If you would like to extend/override the Prettier config provided, you will have to add the config in a `.prettierrc.js` file, then extend with your own configs. For example:

```js
module.exports = {
  ...require('@warungpintar/prettier-config'),
  semi: false,
};
```
