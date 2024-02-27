# Shared [ESLint](https://eslint.org) config

## Install

```
npm install -D eslint @rambler-tech/eslint-config
```

or

```
yarn add -D eslint @rambler-tech/eslint-config
```

## Usage

Included base configs:

- `@rambler-tech/eslint-config` - base JavaScript
- `@rambler-tech/eslint-config/semi` - base with semicolons and trailing commas

Included special configs:

- `@rambler-tech/eslint-config/ts` - TypeScript
- `@rambler-tech/eslint-config/react` - React
- `@rambler-tech/eslint-config/next` - Next.js

Example `.eslintrc.json` for React project:

```json
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/react"
  ]
}
```

Example `.eslintrc.json` for TypeScript project:

```json
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/ts"
  ]
}
```

Example `.eslintrc.json` for TypeScript React project:

```json
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/react",
    "@rambler-tech/eslint-config/ts"
  ]
}
```

Example `.eslintrc.json` for TypeScript Next.js project:

```json
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/next",
    "@rambler-tech/eslint-config/ts"
  ]
}
```

Note that the `@rambler-tech/eslint-config/ts` should be second to last in the list since it includes `@typescript-eslint/parser`
