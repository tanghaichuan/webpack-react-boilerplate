var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var common = require('./common')

var output = {
    path: common.publicPath,
    filename: "js/[name].[hash].js"
}

var resolves = {
    extensions: [
        '.js', '.jsx', '.json'
    ],
    alias: {
        '@': common.resolve('src')
    }
}

var modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.less$/,
            loader: "less-loader",
            include: common.resolve('../src')
        }, {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            query: {
                limit: 10240,
                name: 'img/[name]-[hash:6].[ext]'
            }
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: [
                'jsx', 'babel-loader'
            ],
            include: common.resolve('src')
        }
    ]
}

module.exports = {
    output: output,
    resolve: resolves,
    module: modules
}