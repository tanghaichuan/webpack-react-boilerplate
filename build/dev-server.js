var webpack = require('webpack')
var path = require('path')
var chalk = require('chalk')
var express = require('express')
var opn = require('opn')
var historyApiFallback = require('connect-history-api-fallback')
var WebpackDevServer = require('webpack-dev-server')
var devConfig = require('./webpack.config.dev')
var common = require('./common')

var config = devConfig

var app = express()
var compiler = webpack(config)

var port = 8080
var uri = 'http://localhost:' + port

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));
app.use(require("webpack-hot-middleware")(compiler));

// 静态资源目录
app.use(common.staticDir, express.static('./static'))

// 兼容h5 history api
app.use(historyApiFallback());

console.log(chalk.green('> Starting dev server...'))

app.listen(port, "localhost", function () {
    opn(uri)
})