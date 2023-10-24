# Shared [TypeDoc](https://typedoc.org) config

## Install

```
npm install -D typedoc @rambler-tech/typedoc-config
```

or

```
yarn add -D typedoc @rambler-tech/typedoc-config
```

## Usage

Create a **typedoc.json** and extend this config

```
{
  "extends": "@rambler-tech/typedoc-config"
}
```

## Custom fields

This config supports custom fields from [typedoc-plugin-extras](https://github.com/Drarig29/typedoc-plugin-extras) plugin.

```json
{
  "extends": "@rambler-tech/typedoc-config",
  "customTitle": "Package name",
  "customDescription": "Yet another package"
}
```

## Additional pages

This config supports additional pages with [@knodes/typedoc-plugin-pages](https://github.com/KnodesCommunity/typedoc-plugins/tree/develop/packages/plugin-pages) plugin.

Create markdown files into your repository (by default in the `docs` directory):

```
docs/
  getting-started.md
  getting-started/
    configuration.md
    other.md
  index.json
```

Configure your pages tree in the `index.json` configuration. Example:

```json
[
  {
    "name": "Getting started",
    "source": "getting-started.md",
    "children": [
      { "name": "Configuration", "source": "configuration.md" },
      { "name": "Another page", "source": "other.md" }
    ]
  }
]
```
