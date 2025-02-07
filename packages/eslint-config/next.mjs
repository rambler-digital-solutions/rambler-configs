import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import {reactConfig} from './react.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const nextConfig = [
  ...reactConfig,
  ...compat.config({
    extends: ['next'],
    rules: {
      '@next/next/no-img-element': 0
    }
  })
]

export {nextConfig}
