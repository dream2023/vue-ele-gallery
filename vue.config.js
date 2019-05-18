const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'
const isExample = process.env.IS_EXAMPLE === 'true'

module.exports = {
  publicPath: isDevelopment ? '/' : '/vue-ele-gallery/',
  outputDir: path.resolve(__dirname, './docs/'),
  css: { extract: isDevelopment },
  configureWebpack: {
    entry: isExample ? './example/main.js' : './documentation/main.js',
    output: {
      libraryExport: 'default'
    }
  }
}
