'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './src/';
var js_dist = __dirname +'/dist';

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'prod',
  entry: {
    "bundle": js_root + 'index.js',
  },

  output: {
    libraryTarget: "var",
    library: "ReactD3Basic",
    path: js_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        loader: 'babel-loader', 
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },


  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: false
    })
  ]: []
}];
