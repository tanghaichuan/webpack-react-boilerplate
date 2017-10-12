var webpack = require("webpack")
var express = require("express")
var colors = require('colors')
var path = require("path")
var opn = require("opn")
var devConfig = require("./webpack.config.dev")
var proConfig = require("./webpack.config.pro")
var historyApiFallback = require("connect-history-api-fallback")

// 控制台颜色
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'red',
    info: 'green',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red'
});

var config = process.env.NODE_ENV === 'development'
    ? devConfig
    : proConfig

var app = express()
var compiler = webpack(config)

/**
 * 公共资源路径
 */
var rootPath = path.resolve(__dirname, 'src') // 根目录
var srcPath = path.join(rootPath, 'src') // 开发目录
var publicPath = path.join(rootPath, 'dist') // build 后输出目录
var indexHtml = path.join(srcPath, 'index.html') // 入口模板页面
var staticDir = path.join(rootPath, 'static') // 静态资源目录

var devMiddleware = require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
})

var port = 8080
var uri = 'http://localhost:' + port

// 静态资源目录
app.use(staticDir, express.static('./static'))

// 兼容h5 history api
app.use(historyApiFallback());

app.use(devMiddleware)
app.use(hotMiddleware)

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    opn(uri)
})

app.listen(port, "localhost", function (err) {
    err && console.log(err.error)
})