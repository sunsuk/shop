module.exports = {
    "plugins": {
   
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-px-to-viewport":{
          viewportWidth:375,//视口宽度 = 设计稿的宽度
          viewportHight:667, //视口高度 = 设计稿高度
          unitPrecision:5,//指定px的值转化为几位小数 
          viewPortUnit:'vw',//指定需要转化成的视窗单位
          selectorBlackList:['tab-bar','tab-bar-item','item-text'], //指定不需要转化的类
          minPixelValue:1,//小于或等于1px 的元素不转换
          mediaQuery:false,//不允许媒体查询中转化px
           exclude:[/TabBar/,/TabBarItem/] //指定哪个文件不需要转化 需要正则匹配
        }
      }
}