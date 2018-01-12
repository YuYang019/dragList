var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  watch: true,
  entry: {
    example: ['./example/index.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ]
}
