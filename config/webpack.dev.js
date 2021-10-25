
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheep-module-eval-source-map',
  devServer: {
    hot: true,
    open: false,
    host: '192.168.0.106',
    port: 1024,
    proxy: {
      '/api': {
        target: 'http://192.168.0.106:8086/',
        pathRewrite: {'^/api': ''}
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});