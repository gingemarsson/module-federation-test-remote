const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Module } = require('module');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

module.exports = {
  name: 'client',
  entry: './src/client/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: '/',
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'client',
      filename: 'remoteEntry.js',
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