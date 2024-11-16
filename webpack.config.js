const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Module } = require('module');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

module.exports = {
  name: 'client',
  entry: './src/client/index.tsx',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'client_test_remote',
      exposes: {
        './App': './src/client/components/app'
      },
      shared: {
        'react': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        }
      }
    }
    )
  ]
};