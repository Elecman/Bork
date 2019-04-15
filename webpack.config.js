// webpack.config.js
'use strict';
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/app.js',
        //main: './src/js/main.js',
        // и ещё любое кол-во точек входа
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['env'],
                    ],
                },
            },
        ],
    },
    plugins: [
    ],
    externals: {
        jquery: 'jQuery',
    },
    devtool: 'source-map'
};