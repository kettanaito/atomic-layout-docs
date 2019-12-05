# Contributing

Thank you for deciding to contribute to Atomic Layout! Please read through the instructions below to make sure your contributing experience is smooth and pleasant.

## Pre-requisites

You will have much more confidence and meaningful contributions being familiar with the following technologies:

1. [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
2. [React](https://github.com/facebook/react)
3. [styled-components](https://github.com/styled-components/styled-components)
4. [Storybook](https://github.com/storybooks/storybook)

## Getting started

### Prepare

1. Fork [the repository](https://github.com/kettanaito/atomic-layout),
2. Checkout the forked directory,
3. Install dependencies via `yarn install`

> Atomic Layout uses Yarn as a package manager. Please also use Yarn during your localo development. Thanks.

### Create a feature/bugfix branch

```bash
git checkout -b {ISSUE_NUMBER}-{BRANCH_NAME}
```

### Develop

#### Run development server

```bash
yarn start
```

This launches `webpack-dev-server` in a watch mode to bundle the library upon any change. Pay attention to messages and warnings in the terminal during the process.

#### Run Storybook

```bash
yarn storybook
```

We develop in stories using [Storybook](https://github.com/storybooks/storybook). Create a story for your feature, or a bugfix scenario, and point your browser to the Storybook port after running the command above.

### Build \(optional\)

Atomic Layout ships in the following module types:

* **CommonJS \(default\)**
* ESM
* UMD

 You may want to build the library for a specific module type for debugging purposes. Follow the instructions below to do that.

| Command | Description |
| :--- | :--- |
| `yarn build:all` | Builds all module types. |
| `yarn build:cjs` | Performs the default build \(CJS\). |
| `yarn build:esm` | Builds the ESM module. |
| `yarn build:umd` | Builds the UMD module. |

To use a certain module type build in Storybook you need to provide the `TARGET` environmental variable when running any Storybook command. For example, this launches a local Storybook with the ESM module of the library:

```bash
$ TARGET=esm yarn storybook
```

To build Storybook using a certain module type provide its name in the same `TARGET` environmental variable during the build:

```bash
$ yarn build:storybook:esm
```

### Commit the changes

```bash
git commit -am 'Introduces new feature'
```

### Keep your feature branch up-to-date

```bash
git checkout {TARGET_BRANCH}
git pull --rebase
git checkout {FEATURE_BRANCH}
git rebase {TARGET_BRANCH}
```

### Create a pull request

1. Go to [https://github.com/kettanaito/atomic-layout/compare](https://github.com/kettanaito/atomic-layout/compare),
2. Select the feature branch from your fork and the target branch from Atomic Layout,
3. Fill in the pull request template with patience,
4. Undergo a code review,
5. Witness your changes in the repository!

