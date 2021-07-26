require('dotenv').config();
const webpack = require('webpack');
const glob = require('glob-all');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


/**
 * flag Used to check if the environment is production or not
 */
 const isProduction = (process.env.NODE_ENV === 'production');

 /**
  * Include hash to filenames for cache busting - only at production
  */
 const fileNamePrefix = isProduction? '[chunkhash].' : '';

 /**
 * Options to clean dist folder
 */
const pathsToClean = [
  'dist'
];
const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
      general: './src/js/general.js',
      home: './src/js/home.js',
      status: './src/js/status.js',
      about: './src/js/about.js',
    },
    output: {
      path: __dirname + "/dist",
      filename: fileNamePrefix + '[name].js',
      publicPath: './',
      clean: true,
      library: 'bundle'
    },
    devServer: {  
      contentBase: './',
      compress: true,  
      port: 8080,  
      hot: true,
    }, 
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    module: {
      rules: [	
        { 
          test: /\.js$/i,
          exclude: /(node_modules)/,
          use: { 
            loader: 'babel-loader', 
            options: {
            presets: ['@babel/preset-env']
          }}
        }, 
        { 
          test: /\.css$/, 
          use: isProduction ?
            [ MiniCssExtractPlugin.loader, 'css-loader']	:
            [ 'style-loader', 'css-loader']
        },
        { 
          test: /\.less$/, 
          use: [ 'style-loader', 'css-loader', 'less-loader']		
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {  
          test: /\.(svg|eot|ttf|woff|woff2)$/i,  
          use: {
            loader: 'url-loader',  
            options: {    limit: 10000,    name: 'fonts/[name].[ext]'  }
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader', options: { limit: 10000, name: 'images/[name].[ext]'}
            },
          'img-loader'
          ],
        },
      ],
    },
    plugins: [  
        new webpack.ProvidePlugin({ 
              jQuery: 'jquery', 
              $: 'jquery', 
              jquery: 'jquery' 
            }), 
        new webpack.DefinePlugin({ // Remove this plugin if you don't plan to define any global constants
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          SERVER_URL: JSON.stringify(process.env.SERVER_URL),
          GMAP_KEY: JSON.stringify(process.env.GMAP_KEY),
        }),
    ],
};

/**
 * Non-Production plugins
 */
 if(!isProduction) {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin() // HMR plugin will cause problems with [chunkhash]
  );
};

/**
 * Production only plugins
 */
 if(isProduction) {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: fileNamePrefix + "[name].css",
    }), 
    new CleanWebpackPlugin()
  );
};
  