var path = require("path")
var webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin") // 加载模版页
var CleanWebpackPlugin = require("clean-webpack-plugin") // 清空发布目录

var extractTextPlugin = require("extract-text-webpack-plugin")

/**
 * 公共资源路径
 */
var rootPath = resolve('..') // 根目录
var srcPath = path.join(rootPath, 'src') // 开发目录
var publicPath = path.join(rootPath, 'dist') // build 后输出目录
var indexHtml = path.join(srcPath, 'index.html') // 入口模板页面
var staticDir = path.join(rootPath, 'static') // 静态资源目录

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

var commonPath = {
    rootPath,
    srcPath,
    publicPath,
    indexHtml,
    staticDir
}

/**
 * webpack配置项
 */
var devtool = 'cheap-eval-source-map'

var dev = {
    port: 8080
}
// 热更新
var entry = {
    app: ['webpack-hot-middleware/client?reload=true', resolve('../src/index.js')]
}

var output = {
    path: resolve('dist'),
    filename: "bundle.[hash:6].js",
    publicPath: '/' // 同级目录
}

var resolves = {
    extensions: [
        '.js', '.jsx', '.json'
    ],
    alias: {
        '@': resolve('src')
    }
}

var modules = {
    rules: [
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
            use: [
                'style-loader', 'css-loader'
            ],
            include: resolve('../src')
        }, {
            test: /\.less$/,
            loader: "less-loader",
            include: resolve('../src')
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            query: {
                limit: 10240, // 10KB 以下使用 base64
                name: 'img/[name]-[hash:6].[ext]'
            }
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: [
                'jsx', 'babel-loader'
            ],
            include: resolve('src')
        }
    ]
}

var devServer = {
    historyApiFallback: true,
    hot: true,
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
    new webpack.BannerPlugin('author: tanghc'),
    new extractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
]

var config = {
    devtool: devtool,
    entry: entry,
    output: output,
    module: modules,
    resolve: resolves,
    devServer: devServer,
    plugins: plugins
}

module.exports = config;