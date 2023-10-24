// eslint-disable @typescript-eslint/no-var-requires
const path = require('path')

const OUT_PATH = path.resolve(process.cwd(), 'public')
const DOCS_PATH = path.resolve(process.cwd(), 'docs')
const README_PATH = path.resolve(process.cwd(), 'readme.md')

const config = {
  theme: 'default',
  out: OUT_PATH,
  readme: README_PATH,
  customCss: './theme.css',
  includeVersion: true,
  footerLastModified: true,
  exclude: ['**/*.js', '**/*.test.ts'],
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  excludeNotDocumented: true,
  plugin: ['typedoc-plugin-extras']
}

try {
  const pagesConfig = require(path.resolve(DOCS_PATH, 'index.json'))

  if (pagesConfig) {
    config.plugin.push('@knodes/typedoc-plugin-pages')
    config.pluginPages = {
      source: DOCS_PATH,
      pages: pagesConfig
    }
  }
} catch (e) {}

module.exports = config
