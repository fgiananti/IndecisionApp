const path = require('path'),
      webpack = require('webpack');

module.exports = {
  entry : './client/index.js',
  output : {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['env', 'react'],
        plugins: ['transform-class-properties']
      }
    }]
  },
  devtool: 'cheap-module-eval-sourve-map',
  devServer: {
    contentBase: path.join(__dirname, 'client')
  }
}
