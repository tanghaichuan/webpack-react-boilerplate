var path = require("path")
var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin") // 加载模版页 

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
        port: 8080,
        stats: {
            colors: true
        }
    },  
    plugins: [
        new htmlWebpackPlugin({
            title: '搭建前端工作流', // 文件title
            template: './src/main.html' // 路径
        })
    ]
}

module.exports = config;