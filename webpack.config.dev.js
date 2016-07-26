const webpack = require('webpack');
const path = require('path');

const WebpackHtmlPlugin = require('webpack-html-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  noInfo: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
      __PROD__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}