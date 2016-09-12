'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const resolvePath = require('./path-resolver');

module.exports = {
    entry: {
        vendor: './src/client/vendor.ts',
        app: './src/client/app/main.ts'
    },
    output: {
        path: resolvePath('./public')
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript!angular2-template',
                exclude: /\.spec.ts$/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.less$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                loader: ExtractTextPlugin.extract('style', 'css!less?sourcemap')
            },
            {
                test: /\.css$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourcemap')
            },
            {
                test: /\.less$/, // Component styles
                include: resolvePath('./src/client/app'),
                loader: 'raw!less'
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|png|jpg|jpeg)$/,
                loader: 'url?limit=10000'
            }
        ],
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map'
        }]
    },
    htmlLoader: {
        root: resolvePath('./assets'),
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
        customAttrAssing: [ /\)?]?=/ ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
        // Since ExtractTextPlugin is used only for vendor styles, it's better
        // to always get it enabled. We don't need HRM for vendor styles, but inserting
        // them into DOM takes a lot of resources.
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.NoErrorsPlugin(),
        new ForkCheckerPlugin(),
        new webpack.DefinePlugin({
            'process.env.ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
