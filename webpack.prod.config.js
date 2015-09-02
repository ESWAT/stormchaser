var path = require('path');
var webpack = require('webpack');
var IndexHtmlPlugin = require('indexhtml-webpack-plugin');

module.exports = {
  entry: {
    'index.html': path.join(__dirname, 'src/index.html'),
    'bundle.js': path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new IndexHtmlPlugin('index.html', 'index.html')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.html?$/,
        loaders: ['html'],
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: ['file']
      },
      {
        test: /\.json$/,
        loaders: ['file']
      }
    ],
    noParse: /\.min\.js/
  }
};
