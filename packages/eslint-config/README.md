# `@warungpintar/eslint-config`

> Warung Pintar ESLint config.

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

### Installing canary versions

To try out a bleeding-edge version of our configs, you can add the `@canary` tag in your install script:

```bash
# npm
npm install --save-dev @warungpintar/eslint-config@canary

# yarn
yarn add --dev @warungpintar/eslint-config@canary
```

> **Note:** The canary version is more unstable and includes config changes that might be breaking. Please take note when including it in your projects.
