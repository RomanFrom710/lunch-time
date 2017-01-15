'use strict';

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const resolvePath = require('./helpers/path-resolver');


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
                    'ts-loader',
                    'angular2-template-loader'
                ],
            },
            { // We don't need vendor styles
                test: /\.less$/,
                exclude: resolvePath('./src/client/app'),
                use: ['null-loader']
            },
            {
                test: /\.css$/,
                exclude: resolvePath('./src/client/app'),
                use: ['null-loader']
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                use: ['null-loader']
            }
        ]
    },
    plugins: []
};

module.exports = webpackMerge(commonConfig, testConfig);
