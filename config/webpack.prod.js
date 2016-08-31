'use strict';

const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkHash].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new WebpackCleanupPlugin()
    ]
};

module.exports = webpackMerge(commonConfig, prodConfig);
