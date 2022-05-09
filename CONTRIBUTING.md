# Contributing

Thank you for contributing to this project! This page describes how to setup the project on your computer for local development.

## The Five Golden Rules

The simple steps of contributing to any GitHub project are as follows:

- [Fork the repository](https://github.com/warungpintar/warung-config/fork)
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push -u origin my-new-feature
- Create a [Pull Request](https://github.com/warungpintar/warung-config/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)

To keep your fork of in sync with this repository, [follow this guide](https://help.github.com/articles/syncing-a-fork/).

For contributors with at least Write access to this repository, you can directly clone, push branches, and create a pull request from this repository.

## Prerequisites

### Windows, macOS and Linux

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) (16.0.0+)
- [Yarn](https://classic.yarnpkg.com/lang/en/) (1.x)
- Text Editor with EditorConfig & Prettier support. (We recommend Visual Studio Code)

## Prerequisite Check

Run these commands inside the Terminal (PowerShell/Command Prompt for Windows).

**Git:** You should see the version number:

```sh-session
$ git version
git version 2.35.1.windows.2
```

**Node.js:** You should see the version number:

```sh-session
$ node -v
v16.13.0
```

**Yarn:** You should see the version number:

```sh-session
$ yarn -v
1.22.18
```

Make sure to run

```bash
yarn
```

## Setting Up

First, you should clone the repository that you forked.

```sh-session
$ git clone https://github.com/[your_username]/warung-config.git
```

For example:

```sh-session
$ git clone https://github.com/resir014/warung-config.git
```

After this repository has been cloned, `cd` into the repository:

```sh-session
$ cd warung-config
```

Install the project's dependencies. Note that we use Yarn, not npm:

```sh-session
$ yarn
```

## Developing

To start developing components, open the project in your favourite text editor. (e.g. Visual Studio Code)

```sh-session
$ code .
```

## Commit messages and Pull Request titles

We are following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) guideline to determine semantic version and changelog auto generation. Currently, the presets that we use is [angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md).

### Type

Should be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: docker, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: gitlab-ci, bash scripts)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
