# warung-config

> Configuration files for various tools used at Warung Pintar.

## Packages

- [`@warungpintar/eslint-config`](packages/eslint-config) - ESLint config
- [`@warungpintar/prettier-config`](packages/prettier-config) - Prettier config
- [`@warungpintar/typescript-config`](packages/typescript-config) - TSConfig files

## Installation

Each of the packages in this monorepo can be installed independently. For example, to install the ESLint config:

```bash
# npm
npm install --save-dev @warungpintar/eslint-config

# yarn
yarn add --dev @warungpintar/eslint-config
```

For guidelines on using each package, refer to the readme files for each package.

### Installing canary versions

To try out a bleeding-edge version of our configs, you can add the `@canary` tag in your install script (e.g. for ESLint):

```bash
# npm
npm install --save-dev @warungpintar/eslint-config@canary

# yarn
yarn add --dev @warungpintar/eslint-config@canary
```

> **Note:** The canary version is more unstable and includes config changes that might be breaking. Please take note when including it in your projects.

## Contributing

Contributions and Pull Requests are welcome! Please read through the [contributing guidelines](CONTRIBUTING.md) to get started.
