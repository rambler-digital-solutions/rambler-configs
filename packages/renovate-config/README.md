# Shared [Renovate Bot](https://docs.renovatebot.com) config

## Install

```
npm install -D @rambler-tech/renovate-config
```

or

```
yarn add -D @rambler-tech/renovate-config
```

## Usage

Included configurations:

- `@rambler-tech/renovate-config` - base config
- `@rambler-tech/renovate-config:automerge` - enables auto-merge for `patch` and `minor` updates

Example `renovate.json` for updates with auto-merge:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "@rambler-tech/renovate-config",
    "@rambler-tech/renovate-config:automerge"
  ]
}
```
