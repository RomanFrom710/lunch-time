'use strict';

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const resolvePath = require('./path-resolver');

const testConfig = {
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[chunkHash].js'
    },
    module: {
        loaders: [
            { // We don't need vendor styles
                test: /\.less$/,
                exclude: resolvePath('./src/client/app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: resolvePath('./src/client/app'),
                loader: 'null'
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                loader: 'null'
            }
        ]
    },
    plugins: []
};

module.exports = webpackMerge(commonConfig, testConfig);
