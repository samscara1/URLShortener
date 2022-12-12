const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV
const devMode = mode === 'development'
const devtool = devMode ? 'source-map' : undefined


module.exports = {
  mode,
  // devtool,
  // entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   clean: true,
  //   filename: '[name].[contenthash].js'
  // },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(ts|js)x?$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'babel-loader'
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.(scss|css)$/,
  //       use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  //     },
  //   ]
  // },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'index.html')
    // }),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],

  devServer: {
    port: 8000,
    static: './dist'
  },
}