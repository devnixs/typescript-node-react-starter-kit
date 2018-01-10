'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

// multiple extract instances
let extractCSS = new ExtractTextPlugin('styles/app.css');

const filter = arr => arr.filter(i => i);
const isProduction = NODE_ENV !== 'development';

module.exports = {
  context: path.resolve(__dirname, 'front'),

  entry: {
    app: filter([
      'babel-polyfill',
      !isProduction ? 'react-hot-loader/patch' : undefined,
      !isProduction ? 'webpack/hot/only-dev-server' : undefined,
      './src/client.tsx',
      './styles/app.scss',
    ]),
  },

  output: {
    path: path.resolve(__dirname, 'front/build'),
    filename: isProduction ? '[name].[hash].bundle.js' : '[name].bundle.js',
  },

  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: NODE_ENV === 'development' ? 'source-map' : 'nosources-source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: isProduction ? extractCSS.extract(['css-loader', 'sass-loader']) : ['css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'front'),
        exclude: /(node_modules|bower_components)/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'front'),
    hot: true,
    stats: {
      warnings: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: filter([
    new CleanWebpackPlugin(path.join(__dirname, 'front/build')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      // move all node_modules to vendors bundle.
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
      filename: isProduction ? 'vendors.[hash].bundle.js' : 'vendors.bundle.js',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      'process.env': {
        NODE_ENV: NODE_ENV === 'development' ? '"development"' : '"production"',
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'front/index.html'),
      filename: path.join(__dirname, 'front/build/index.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin({
      alwaysWriteToDisk: true,
      outputPath: path.join(__dirname, 'back'),
    }),
    isProduction ? extractCSS : null,
  ]),

  resolve: {
    modules: [path.join(__dirname, 'front'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // don't show unreachable variables etc
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    })
  );
}
