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

Create a **.eslinrc** and extend this config. Make sure to put `eslint-config-prettier` last, so it gets the chance to override other configs

```
{
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/ts",
    "prettier"
  ]
}
```

or add a key to your **package.json** file.

```
"eslintConfig": {
  "extends": [
    "@rambler-tech/eslint-config",
    "@rambler-tech/eslint-config/ts",
    "prettier"
  ]
}
```

## Included configurations

Use proper configs at the same time depending on your stack. Included configs:

- `@rambler-tech/eslint-config` - base JavaScript
- `@rambler-tech/eslint-config/semi` - base with semicolons and trailing commas
- `@rambler-tech/eslint-config/ts` - TypeScript
- `@rambler-tech/eslint-config/react` - React
- `@rambler-tech/eslint-config/next` - Next.js

Note that the `@rambler-tech/eslint-config/ts` should be second to last in the list (before the 'prettier') since it includes `@typescript-eslint/parser`:

```
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
