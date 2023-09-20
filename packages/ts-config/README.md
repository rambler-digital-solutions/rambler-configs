# Shared [TypeScript](https://www.typescriptlang.org) config

## Install

```
npm install -D typescript @rambler-tech/ts-config
```

or

```
yarn add -D typescript @rambler-tech/ts-config
```

## Usage

Create a **tsconfig.json** and extend this config. Don't forget to add `baseUrl` option since it is relative to `tsconfig.json` file location.

```
{
	"extends": "@rambler-tech/ts-config/base",
  "compilerOptions": {
    "baseUrl": "src",
    ...
  }
}
```

Shared config is a **base** config — means it includes compiler options that are only shared between all typescript projects. You should add special options for each project explicitly.
