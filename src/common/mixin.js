//混入将相同的代码组合在一起 

import {debounce} from './utils'
export const ImgLoadListernerMinXi = {
    data(){
        return{
            ImgLoadok:null,//加载完成的事件取消
            myrefresh:null//让防抖函数保存在内存中
        }
    },
    mounted(){
        //图片加载完成后刷新页面
        this.myrefresh = debounce(this.$refs.scroll.refresh,100)
        this.ImgLoadok = ()=>{
          this.myrefresh() 
        }
        this.$bus.$on('loadOK',this.ImgLoadok)
        // console.log('我是混入的代码')
      },
}
//回到顶部的代码混入
export const backTopMixin = {
  data(){
    return {//记录当前的位置
      currentY:0
    }
  },
  methods:{
    //点击后调用封装的backTop方法
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    }
  }
}