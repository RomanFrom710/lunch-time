'use strict';
// todo: split webpack config for different environments
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolvePath = require('./path-resolver');

module.exports = {
    entry: {
        vendor: './src/client/vendor.ts',
        app: './src/client/app/main.ts'
    },
    output: {
        path: './public',
        filename: '[name].js'
    },
    devtool: 'source-map',
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
                test: /\.(less|css)$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                loader: ExtractTextPlugin.extract('css?sourcemap')
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
        new ExtractTextPlugin('[name].css')
    ]
};
