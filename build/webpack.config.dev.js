import path from 'path'
import webpack from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import extractTextPlugin from 'extract-text-webpack-plugin'

console.log("dev");

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
const devtool = '#cheap-source-map'

const dev = {
    port: 8080
}
// 热更新
const entry = {
    app: [
        'babel-polyfill', 'react-hot-loader/patch', path.join(srcPath, "index.js")
    ],
    vendor: ['lodash']
}

const output = {
    path: resolve('dist'),
    filename: "[name].[hash:8].js",
    publicPath: '/' // 同级目录
}

const resolves = {
    extensions: [
        '.js', '.jsx', '.json'
    ],
    alias: {
        '@': resolve('src')
    }
}

const modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
        }, {
            test: /\.css$/,
            loader: extractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
        }, {
            test: /\.less$/,
            loader: "less-loader",
            include: resolve('../src')
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
            include: resolve('src')
        }
    ]
}

const devServer = {
    historyApiFallback: true,
    hot: true,
    contentBase: "dist",
    inline: true,
    port: 8080,
    stats: {
        colors: true
    }
}

const plugins = [
    new htmlWebpackPlugin({title: "", template: "./src/index.html"}),

    new extractTextPlugin('css/[name].[hash].css'),

    new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor'}),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.HotModuleReplacementPlugin()
]

export default {
    devtool : devtool,
    entry : entry,
    output : output,
    module : modules,
    resolve : resolves,
    devServer : devServer,
    plugins : plugins
}