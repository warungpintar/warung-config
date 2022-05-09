# `@warungpintar/prettier-config`

> Base Prettier config used at Warung Pintar.

This package is part of the warung-config project. Please read the main README file [here](https://github.com/warungpintar/warung-config).

## Installation

Install Prettier and `warung-config-prettier` into your project.

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

### Installing canary versions

To try out a bleeding-edge version of our configs, you can add the `@canary` tag in your install script:

```bash
# npm
npm install --save-dev @warungpintar/prettier-config@canary

# yarn
yarn add --dev @warungpintar/prettier-config@canary
```

> **Note:** The canary version is more unstable and includes config changes that might be breaking. Please take note when including it in your projects.
