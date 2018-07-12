require('@remy/envy')
const webpack = require('webpack')
const withCss = require('@zeit/next-css')

module.exports = withCss({
  cssModules: false,
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(['SHOW_SPEAKER']))

    return config
  }
})
