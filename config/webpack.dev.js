'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const commonConfig = require('./webpack.common');
const appConfig = require('../src/server/config');

const devConfig = {
    entry: {
        hot: 'webpack-hot-middleware/client?reload=true',
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBrowserPlugin({
            url: 'http://localhost',
            port: appConfig.get('port')
        })
    ]
};

module.exports = webpackMerge(commonConfig, devConfig);
