var webpack = require('webpack')
var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack
        .optimize
        .UglifyJsPlugin({sourceMap: false, compress: true}),
    // 提取公共代码到公共文件，在每次修改后的的构建结果中，将webpack的样板(boilerplate)和 manifest提取出来
    // 常用的第三方库，如lodash等提取到单独的vendor chunk中

    new webpack.BannerPlugin('author: tanghc')
]