// eslint-disable @typescript-eslint/no-var-requires
const path = require('path')

const OUT_PATH = path.resolve(process.cwd(), 'public')
const DOCS_PATH = path.resolve(process.cwd(), 'docs')
const README_PATH = path.resolve(process.cwd(), 'readme.md')

let pagesConfig

try {
  pagesConfig = require(path.resolve(DOCS_PATH, 'index.json'))
} catch (e) {}

module.exports = {
  theme: 'default',
  out: OUT_PATH,
  readme: README_PATH,
  exclude: ['**/*.js', '**/*.test.ts'],
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  excludeNotDocumented: true,
  plugin: ['@knodes/typedoc-plugin-pages'],
  pluginPages: {
    source: DOCS_PATH,
    pages: pagesConfig
  }
}
