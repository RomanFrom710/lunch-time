'use strict';
// todo: split webpack config for different environments
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        styles: './src/client/style', // Common styles
        vendor: './src/client/app/vendor.ts',
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
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.less$/, // Common styles
                loader: ExtractTextPlugin.extract('css?sourcemap!less')
            }, // todo: add rule for component styles in app folder
            {
                test: /\.(woff|woff2|eot|svg|ttf)/,
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
