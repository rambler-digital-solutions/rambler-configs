# Shared [CommitLint](https://commitlint.js.org) config

## Install

```
npm install -D @commitlint/cli @rambler-tech/commitlint-config
```

or

```
yarn add -D @commitlint/cli @rambler-tech/commitlint-config
```

## Usage

Included configurations:

- `@rambler-tech/commitlint-config` - simple rules
- `@rambler-tech/commitlint-config/conventional` - for conventional commits
- `@rambler-tech/commitlint-config/shared` - for shared modules – conventional commits with optional refs

Example `.commitlintrc.json` for conventional commits:

```json
{
  "extends": [
    "@rambler-tech/commitlint-config/conventional"
  ]
}
```
