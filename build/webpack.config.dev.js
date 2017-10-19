var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var autoPrefixer = require('autoprefixer')
var base = require('./webpack.config.base')
var common = require('./common')

/**
 * webpack配置项
 */
var devtool = '#cheap-source-map'

var dev = {
    port: 8080
}
// 热更新
var entry = {
    app: [
        'react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(common.srcPath, "index.js")
    ],
    vendor: [
        'lodash',
        'react',
        'react-dom'
    ]
}

var resolves = {
    extensions: [
        '.js', '.jsx', '.json'
    ],
    alias: {
        '@': common.srcPath
    }
}

var modules = {
    rules: [
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader", {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [autoPrefixer()]
                    }
                }
            ]
        }
    ]
}

var plugins = [
    new htmlWebpackPlugin({title: "", template: "./src/index.html"}),
    new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new cleanWebpackPlugin(['dist'], {
        root: common.rootPath,
        verbose: true,
        dry: false
    }),
    new webpack.HotModuleReplacementPlugin()
]

var config = merge(base, {
    devtool: devtool,
    entry: entry,
    plugins: plugins,
    module: modules,
    resolve: resolves
})

module.exports = config