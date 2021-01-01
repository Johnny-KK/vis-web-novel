// const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
  devServer: {
    port: process.env.VUE_APP_PORT,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    host: '0.0.0.0',
    disableHostCheck: true, // 允许域名访问
    /** 代理设置 */
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL, // 网关地址,
        changeOrigin: true,
        timeout: 240000, // 设置超时时间
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    /** 包分析 */
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end();
    }
  }
  //   configureWebpack: config => {
  //     if (process.env.NODE_ENV !== 'production' && process.env.VUE_APP_SENTRY_MAP === 'ON') {
  //       config.plugins.push(
  //         new SentryWebpackPlugin({
  //           release: process.env.VUE_APP_RELEASE_VERSION,
  //           include: '.',
  //           ignore: ['node_modules', 'webpack.config.js']
  //         })
  //       );
  //     }
  //   }
};
