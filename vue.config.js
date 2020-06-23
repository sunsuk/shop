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
    }
}