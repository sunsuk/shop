module.exports = {
    //配置路径别名
    configureWebpack:{
        resolve:{
            alias:{
              'assets' :'@/assets',  
              'components':'@/components',
              'views' : '@/views',
              'common' : '@/common',
              'network' :'@/network'
            }
        }
    },
            // 基本路径
        publicPath: './',
        // 输出文件目录
        outputDir: 'dist',
        // webpack-dev-server 相关配置
        devServer: {
            port: 8888,
        },

}