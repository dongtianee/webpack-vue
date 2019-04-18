const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackQCDNFile = require('@q/webpack4-qcdn-file');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.(postc|pc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new WebpackQCDNFile({
      debug: false,
      qcdnOpt: {
        https: true
      }
    })
  ]
});
