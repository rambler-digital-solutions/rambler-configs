# Rambler Configs

Rambler team configurations for linters, formatters and tools

## Tools

* [ESLint](packages/eslint-config)
* [License Lint](packages/licenselint-config)
* [Prettier](packages/prettier-config)
* [Semantic Release](packages/semantic-release-config)
* [StyleLint](packages/stylelint-config)
* [TypeScript](packages/ts-config)
* [TypeDoc](packages/typedoc-config)

## Contributing

### Dev environment

#### Start

To start development you need install `yarn` and deps:

```sh
yarn install
```

#### Code quality

To run linting the codebase:

```sh
yarn lint
```

To check licenses:

```sh
yarn licenselint
```

### Publish

To bump version of changed packages and generate changelog run:

```sh
yarn release
```

## License

MIT
