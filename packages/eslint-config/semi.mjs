import {jsConfig} from './js.mjs'

const semi = [
  ...jsConfig,
  {
    rules: {
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'only-multiline']
    }
  }
]

export {semi}
