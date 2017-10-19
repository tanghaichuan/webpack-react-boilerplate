var webpack = require('webpack')
var path = require('path')
var chalk = require('chalk')
var express = require('express')
var opn = require('opn')
var historyApiFallback = require('connect-history-api-fallback')
var WebpackDevServer = require('webpack-dev-server')
var devConfig = require('./webpack.config.dev')

var config = devConfig

var app = express()
var compiler = webpack(config)

var port = 8080
var uri = 'http://localhost:' + port
/**
 * 公共资源路径
 */
var rootPath = path.resolve(__dirname, 'src') // 根目录
var srcPath = path.join(rootPath, 'src') // 开发目录
var publicPath = path.join(rootPath, 'dist') // build 后输出目录
var indexHtml = path.join(srcPath, 'index.html') // 入口模板页面
var staticDir = path.join(rootPath, 'static') // 静态资源目录

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));
app.use(require("webpack-hot-middleware")(compiler));

// 静态资源目录
app.use(staticDir, express.static('./static'))

// 兼容h5 history api
app.use(historyApiFallback());

console.log(chalk.green('> Starting dev server...'))

app.listen(port, "localhost", function () {
    opn(uri)
})