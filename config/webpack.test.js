'use strict';

const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.common');


const testConfig = {
    devtool: 'inline-source-map',
    output: {
        path: null,
        filename: '[name].[chunkHash].js'
    },
    module: {
        rules: [
            {
                test: /\.spec.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                use: ['null-loader']
            }
        ]
    },
    plugins: [new ExtractTextPlugin({
        filename: '[name].[hash].css'
    })]
};

module.exports = webpackMerge.strategy({ plugins: 'replace' })(commonConfig, testConfig);
