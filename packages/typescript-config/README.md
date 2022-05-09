# `@warungpintar/typescript-config`

> Warung Pintar TypeScript config.

## Installation

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
  "extends": "@warungpintar/typescript-config"
}
```

### Installing canary versions

To try out a bleeding-edge version of our configs, you can add the `@canary` tag in your install script:

```bash
# npm
npm install --save-dev @warungpintar/typescript-config@canary

# yarn
yarn add --dev @warungpintar/typescript-config@canary
```

> **Note:** The canary version is more unstable and includes config changes that might be breaking. Please take note when including it in your projects.
