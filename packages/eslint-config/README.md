# Shared [ESLint](https://eslint.org) config

## Install

```
npm install -D eslint @rambler-tech/eslint-config eslint-config-prettier
```

or

```
yarn add -D eslint @rambler-tech/eslint-config eslint-config-prettier
```

## Usage

Create a `.eslinrc.json` and extend this config. Make sure to put [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) last, so it gets the chance to override other configs

```json
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/ts",
    "prettier"
  ]
}
```

or add a key to your **package.json** file.

```json
"eslintConfig": {
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/ts",
    "prettier"
  ]
}
```

## Included configurations

Use proper configs at the same time depending on your stack.

Included base configs:

- `@rambler-tech/eslint-config` - base JavaScript
- `@rambler-tech/eslint-config/semi` - base with semicolons and trailing commas

Included special configs:

- `@rambler-tech/eslint-config/ts` - TypeScript
- `@rambler-tech/eslint-config/react` - React
- `@rambler-tech/eslint-config/next` - Next.js

Note that the `@rambler-tech/eslint-config/ts` should be second to last in the list (before the 'prettier') since it includes `@typescript-eslint/parser`:

```json
"eslintConfig": {
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/react",
    "@rambler-tech/eslint-config/next",
    "@rambler-tech/eslint-config/ts",
    "prettier"
  ]
}
```

## Module resolution

Included [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) requires additional settings if you use custom module resolution. For example if you use aliases instead of long relative paths:

```ts
import App from 'components/app'
```

This config includes [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack) and [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript).

To use resolution options from `tsconfig.json` add the following settings to your `.eslintrc.json`.

```json
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/ts",
    "prettier"
  ],
  "settings": {
    "import/resolver": {
      "typescript": true
    }
  }
}
```
