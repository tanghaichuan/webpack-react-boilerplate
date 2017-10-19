var path = require('path')

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

module.exports = {
    resolve,
    rootPath,
    srcPath,
    publicPath,
    indexHtml,
    staticDir
}