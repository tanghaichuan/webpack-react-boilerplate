var path = require("path")
var webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin") // 加载模版页
var CleanWebpackPlugin = require("clean-webpack-plugin"); // 清空发布目录

var entry = path.resolve(__dirname, "./src/index.js");

var output = {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
}

var modules = {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader",
            include: path.resolve(__dirname, "src")
        }, {
            test: /\.less$/,
            loader: "less-loader",
            include: path.resolve(__dirname, "src")
        }
    ]
}

var devServer = {
    contentBase: "dist",
    inline: true,
    port: 8080,
    stats: {
        colors: true
    }
}

var plugins = [
    /**
     * 加载首页模版
     */
    new htmlWebpackPlugin({
        title: "", // 文件title
        template: "./src/index.html" // 路径
    }),
    /*
    * clean publishing directory
    * （发布前及开发模式下清空发布目录）
    * */
    new CleanWebpackPlugin(["dist"], {
        root: "", // An absolute path for the root  of webpack.config.js
        verbose: true, // Write logs to console.
        dry: false // Do not delete anything, good for testing.
    })

]

var config = {
    entry: entry,
    output: output,
    module: modules,
    devServer: devServer,
    plugins: plugins
}

module.exports = config;