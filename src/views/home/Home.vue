<template>
  <div id="home">
      <nav-bar class="nav-bar">
          <div slot='center'>suk商城</div>
      </nav-bar>
      <!-- 假的选项卡 -->
     <tab-control :titles="['流行','新款','精选']"
       class="tab-control"
       @tabClick="tabClick"
       ref="tabcontrol1"
       v-show="isFixed"
      ></tab-control>
      <scroll class="content" ref="scroll"
       :probe-type='3'
        @scroll="HomeScroll"
        :pull-up-load='true'
        @pullingUp='loadMore'
        >
      <!-- 轮播图 -->
      <home-swiper :banners='banners'
      @swiperImgLoad='swiperLoad'
      ></home-swiper>
      <!-- 圆点图 -->
      <recommend-view :recommend='recommend'></recommend-view>
      <!-- 大图 -->
      <feature-view></feature-view>
      <!-- 选项卡 -->
      <tab-control :titles="['流行','新款','精选']"
       
       @tabClick="tabClick"
       ref="tabcontrol2"
      ></tab-control>
     <!-- 商品列表 -->
     <goods-list :goods='goodsList[crType].list'></goods-list>
      </scroll>
      <!-- 回到顶部组件 -->
      <!-- native修饰符 可监听组件的事件 -->
      <back-top @click.native="backTop" v-show="currentY>=1000"></back-top>
     
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import{ImgLoadListernerMinXi,backTopMixin} from 'common/mixin'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
 components:{
     NavBar,
     HomeSwiper,
     RecommendView,
     FeatureView,
     TabControl,
     GoodsList,
     Scroll,
     BackTop
 },
 mixins:[ImgLoadListernerMinXi,backTopMixin],
  data(){
      return{
          banners:[],//轮播图数据
          recommend:[],//轮播图下方的圆圈图
          goodsList:{ //商品列表
              pop:{page:0,list:[]},
              new:{page:0,list:[]},
              sell:{page:0,list:[]}
          },
          crType:'pop',//假设当前的商品模块
          offsetT:0,//tab-control默认的offsettop值
          isFixed:false,//是否显示吸顶效果
          scrollY:0,//商品停留的位置
          scrollTop:0,//记录保存滚动的位置
        //   ImgLoadok:null,//首页图片加载完成的事件
      }
  },
 created(){
     this._getHomeMultidata()
     this._getHomeGoods('pop')
     this._getHomeGoods('new')
     this._getHomeGoods('sell')
     
   

 },
 mounted(){
     //1.监听商品列表发出来的图片加载完成loadOK事件 
    //  //this.$bus.$on('name')接收事件
    //   const refresh =  debounce(this.$refs.scroll.refresh,500)
    //   this.homeImgListenr = ()=>{
    //      refresh()
    //  }
    //  this.$bus.$on('loadOK',this.homeImgListenr)
     //2.tab-control吸顶效果
    
    this.swiperLoad()
    //监听首页的位置
    document.addEventListener('scroll',this.handelscroll)
 },
   //保持首页的商品停留位置
   //1.给视图层包裹一个keep-alive 不然activated和deactivated不起效
   //2.
   activated(){
    //    console.log('在这里')
       //回到当前页面的时候迅速移动到刚刚的位置
    //    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    //    document.body.scrollTop=localStorage.getItem('scrollTop')
       this.$refs.scroll.refresh()

       
   },
   deactivated(){
       //离开页面之前保存y轴的数字 
    //    console.log('离开之前')

    //  this.scrollY = this.$refs.scroll.getScrollY()
    //  localStorage.setItem('scrollTop',this.scrollTop)
     //离开首页取消对图片的监听
     this.$bus.$off('loadOK',this.homeImgListenr)

      
   },
 methods:{
     handelscroll(){
         console.log('diaoyongle ')
         this.scrollTop = document.body.scrollTop

     },
     //轮播图请求
     _getHomeMultidata(){
       getHomeMultidata().then(res=>{
         this.banners = res.data.banner.list
         this.recommend = res.data.recommend.list
     })
     },
     //商品列表请求
     _getHomeGoods(type){
         const page = this.goodsList[type].page+1
         getHomeGoods(type,page).then(res=>{
            //  console.log(res.data.list)
             //push(...sth) 以多个数据传入 并不会替换以前的数据
             this.goodsList[type].list.push(...res.data.list)
            //  请求完毕后页码+1
             this.goodsList[type].page +=1
             //请求一次上拉加载更多 
             this.$refs.scroll.finish()

         })
     },
     tabClick(index){
         switch(index){
             case 0:
             this.crType='pop';
             break;
             case 1:
             this.crType = 'new';
             break;
             case 2:
             this.crType = 'sell'            
         }
        //  给组件的当前index重新赋值
         this.$refs.tabcontrol1.curentIndex = index
         this.$refs.tabcontrol2.curentIndex = index

     },
     backTop(){
        //  通过this.$refs.name.方法名 可以获取到组件内部的方法
       this.$refs.scroll.scrollTo(0,0,500)
     },
     //监听首页的滚动距离控制回到顶部的隐藏和显示
     HomeScroll(postion){
         //positon是负值
       this.currentY = -(postion.y)
       //是否显示 吸顶效果
        this.isFixed = -(postion.y) > this.offsetT
     },
     //上拉加载更多更多时调用商品数据
     loadMore(){
       this._getHomeGoods(this.crType)
     },
        //得到offsettop
        //2.1得到tab-control组件的offsetTop值 .$el才可以得到组件本身的属性
        //  console.log(this.$refs.tabcontrol.$el.offsetTop)
        //影响计算offsetTop的因素是轮播图 因为它加载比较慢
     swiperLoad(){
         this.offsetT = this.$refs.tabcontrol2.$el.offsetTop
         
     }
 }
}
</script>

<style scoped>
#home{
    position: relative;
    height: 100vh;
}
.tab-control{
   position: relative;
   z-index: 9;
   background-color: #fff;
}
.nav-bar{
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    z-index: 9;
     background-color: var(--color-tint);
     color: #fff;

}
.content{
    /* better 包裹的元素必须设置高度 */
    position: absolute;
    top: 44px;
    bottom: 40px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>>

