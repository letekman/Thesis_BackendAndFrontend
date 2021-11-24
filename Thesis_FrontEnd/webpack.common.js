const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins:
    [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./assets/favicon.png"

      }),
      new CopyPlugin({
        patterns: 
        [
          {from: './assets', to: './assets'}
        ]
      })  
    ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }

};