require('@remy/envy')
const webpack = require('webpack')
const withCss = require('@zeit/next-css')

const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withCss(
  withBundleAnalyzer({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      },
      openAnalyzer: true
    },
    cssModules: false,
    webpack: config => {
      config.plugins.push(new webpack.EnvironmentPlugin(['SHOW_SPEAKER']))

      return config
    },
    exportPathMap: async function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/contact': { page: '/contact' },
        '/session/memory': { page: '/session', query: { slug: 'memory' } },
        '/session/rethinking': {
          page: '/session',
          query: { slug: 'rethinking' }
        },
        '/session/passwords': {
          page: '/session',
          query: { slug: 'passwords' }
        },
        '/session/art': {
          page: '/session',
          query: { slug: 'art' }
        }
      }
    }
  })
)
