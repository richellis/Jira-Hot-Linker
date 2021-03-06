/* eslint-env node */
const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './jira-plugin/src/content.jsx',
  output: {
    path: './jira-plugin/build',
    filename: 'main.js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }, {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?sourceMap!sass-loader?sourceMap'
        ]
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  }
};