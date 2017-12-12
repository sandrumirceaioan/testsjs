var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //devServer: {contentBase: [path.resolve(__dirname, 'src')], port: 1111},
  entry: {
    'bundle.css': [
      path.resolve(__dirname, 'src/css/main.css'),
      path.resolve(__dirname, 'src/css/local.css')
    ],
    'bundle.js': [
      path.resolve(__dirname, 'src/js/test.js'),
      path.resolve(__dirname, 'src/js/index.js')
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};
