const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(postc|pc|c)ss$/,
      use: [
        'vue-style-loader',
        "css-loader",
        'postcss-loader'
      ]
    }]
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    https: true,
    port: 8088,
    stats: {
      colors: true,
      source: false,
      reasons: false,
      publicPath: false,
      performance: false,
      modules: false,
      children: false,
      chunks: false,
      assets: false,
      entrypoints: false,
    },
    proxy: {
      // '/proxy': {
      //   target: 'http://example.com',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/proxy': ''
      //   },
      // }
    }
  }
});
