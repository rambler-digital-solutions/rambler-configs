# Shared [ESLint](https://eslint.org) v9 config

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

Example `eslint.config.mjs` for React project:

```mjs
import { jsConfig } from '@rambler-tech/eslint-config'
import { reactConfig } from '@rambler-tech/eslint-config/react'

export default [...jsConfig, ...reactConfig]
```

Example `eslint.config.mjs` for TypeScript project:

```mjs
import { jsConfig } from '@rambler-tech/eslint-config'
import { tsConfig } from '@rambler-tech/eslint-config/ts'

export default [...jsConfig, ...tsConfig]
```

Example `eslint.config.mjs` for TypeScript React project:

```mjs
import { jsConfig } from '@rambler-tech/eslint-config'
import { reactConfig } from '@rambler-tech/eslint-config/react'
import { tsConfig } from '@rambler-tech/eslint-config/ts'

export default [...jsConfig, ...reactConfig, ...tsConfig]
```

Example `eslint.config.mjs` for TypeScript Next.js project:

```mjs
import { jsConfig } from '@rambler-tech/eslint-config'
import { nextConfig } from '@rambler-tech/eslint-config/next'
import { tsConfig } from '@rambler-tech/eslint-config/ts'

export default [...jsConfig, ...nextConfig, ...tsConfig]
```

Note that the `@rambler-tech/eslint-config/ts` should be second to last in the list since it includes `@typescript-eslint/parser`
