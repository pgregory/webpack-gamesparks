const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'gamesparks': path.resolve(__dirname, 'src/lib/gamesparks/'),
    }
  },
  node: {
    fs: "empty",
  },
  devtool: "eval-source-map",
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/lib',
        to: 'lib',
      },
      'src/index.html',
    ])
  ]
};
