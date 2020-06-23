<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
 data(){
     return{
         scroll:null
     }
 },
 props:{
     probeType:{
         type:Number,
         default:0
     },
     pullUpLoad:{
         type:Boolean,
         default:false
     }
 },
 mounted(){
     //1.创建scroll对象
     this.scroll = new BScroll(this.$refs.wrapper,{
         //0-1都是不检测 2是检测但是不包括惯性滚动的距离 3是只要滚动就检测
         probeType:this.probeType,//是否实时监听滚动坐标轴  
         pullUpLoad:this.pullUpLoad,//是否上拉加载更多
         click:true
     })
     //2.监听scroll的滚动坐标值是负值
     this.scroll.on('scroll',postion=>{
         this.$emit('scroll',postion)
     })
     //3.监听上拉加载更多
     this.scroll.on('pullingUp',()=>{
         this.$emit('pullingUp')
         
     })
 },
methods:{
    //封装this.scroll的方法 x横坐标位置 y纵坐标位置 time所要时间
    scrollTo(x,y,time=300){
       this.scroll.scrollTo(x,y,time) 
    },
    //封装上拉加载更多的下次加载
    finish(){
    //要加上finishPullUp才能执行多次
       this.scroll.finishPullUp()
    },
    //时时计算页面的高度
    refresh(){
        this.scroll.refresh()
    }

}
}
</script>

<style scoped>

</style>