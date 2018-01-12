const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './client/index.jsx');
const BUILD_DIR = path.resolve(__dirname, './dist');
const TEMPLATE_DIR = path.resolve(__dirname, './client/template.index.html');

const cleanOptions = {
  verbose: true,
};

module.exports = {
  entry: {
    app: APP_DIR,
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], cleanOptions),
    new HTMLWebpackPlugin({
      template: TEMPLATE_DIR,
      inject: 'body',
    })
  ]
};
