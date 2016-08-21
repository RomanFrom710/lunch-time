'use strict';
// todo: split webpack config for different environments
const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: './src/client/polyfills.ts',
        vendor: './src/client/vendor.ts',
        app: './src/client/app/main.ts'
    },
    output: {
        filename: './public/compiled/[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /.ts$/,
            loader: 'ts-loader'
        }],
        preLoaders: [{
            test: /.js$/,
            loader: 'source-map-loader'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor', 'polyfills']
        })
    ]
};
