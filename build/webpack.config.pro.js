var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var extractTextPlugin = require('extract-text-webpack-plugin')
var base = require('./webpack.config.base')
var common = require('./common')

/**
 * webpack配置项
 */

// 热更新
var entry = {
    app: [path.join(common.srcPath, "index.js")],
    vendor: ['lodash']
}

var modules = {
    rules: [
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
        }
    ]
}

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new extractTextPlugin('css/[name].[hash].css'),
    new htmlWebpackPlugin({title: "", template: "./src/index.html"}),
    new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor'}),
    new webpack
        .optimize
        .UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
]

var config = merge(base, {
    entry: entry,
    module: modules,
    plugins: plugins
})

module.exports = config