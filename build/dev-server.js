import webpack from 'webpack'
import path from 'path'
import chalk from 'chalk'
import express from 'express'
import colors from 'colors'
import opn from 'opn'
import historyApiFallback from 'connect-history-api-fallback'
import WebpackDevServer from 'webpack-dev-server'
import devConfig from './webpack.config.dev'
import proConfig from './webpack.config.pro'

let config = process.env.NODE_ENV === 'development'
    ? devConfig
    : proConfig

const app = express()
const compiler = webpack(config)

/**
 * 公共资源路径
 */
var rootPath = path.resolve(__dirname, 'src') // 根目录
var srcPath = path.join(rootPath, 'src') // 开发目录
var publicPath = path.join(rootPath, 'dist') // build 后输出目录
var indexHtml = path.join(srcPath, 'index.html') // 入口模板页面
var staticDir = path.join(rootPath, 'static') // 静态资源目录

const server = new WebpackDevServer(compiler, {
    stats: {
        colors: true
    }
});

var port = 8080
var uri = 'http://localhost:' + port

// 静态资源目录
server.use(staticDir, express.static('./static'))

// 兼容h5 history api
server.use(historyApiFallback());

console.log(chalk.green('> Starting dev server...'))

server.listen(port, "localhost", (err) => {
    if(err) {
        console.log(chalk.red(err))
    } else{
        opn(uri)
    }
})