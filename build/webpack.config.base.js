var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var common = require('./common')

var output = {
    path: common.publicPath,
    filename: "js/[name].[hash].js"
}

var modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
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
            loader: 'babel-loader'
        }
    ]
}

module.exports = {
    output: output,
    module: modules
}