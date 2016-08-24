'use strict';
// todo: split webpack config for different environments
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin'); // todo: checkout new version, when it'll be fixed

const resolvePath = require('./path-resolver');

module.exports = {
    entry: {
        vendor: './src/client/vendor.ts',
        hot: 'webpack-hot-middleware/client?reload=true', //todo: for dev only
        app: './src/client/app/main.ts'
    },
    output: {
        path: resolvePath('./public'),
        filename: '[name].[hash].js'
    },
    devtool: 'eval-cheap-module-source-map', // todo: for dev only
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts!angular2-template'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.less$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                //loader: ExtractTextPlugin.extract('css!less?sourcemap')
                loader: 'style!css!less?sourcemap'
            },
            {
                test: /\.css$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                //loader: ExtractTextPlugin.extract('css?sourcemap')
                loader: 'style!css?sourcemap'
            },
            {
                test: /\.less$/, // Component styles
                include: resolvePath('./src/client/app'),
                loader: 'raw!less'
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                loader: 'url?limit=10000'
            }
        ],
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
        //new ExtractTextPlugin('[name].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //new WebpackCleanupPlugin()
    ]
};
