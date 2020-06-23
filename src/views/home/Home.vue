<template>
  <div id="home">
      <nav-bar class="nav-bar">
          <div slot='center'>购物街</div>
      </nav-bar>

      <scroll class="content" ref="scroll"
       :probe-type='3'
        @scroll="HomeScroll"
        :pull-up-load='true'
        @pullingUp='loadMore'
        >
      <!-- 轮播图 -->
      <home-swiper :banners='banners'></home-swiper>
      <!-- 圆点图 -->
      <recommend-view :recommend='recommend'></recommend-view>
      <!-- 大图 -->
      <feature-view></feature-view>
      <!-- 选项卡 -->
      <tab-control :titles="['流行','新款','精选']"
       class="tab-control"
       @tabClick="tabClick"
      ></tab-control>
     <!-- 商品列表 -->
     <goods-list :goods='goodsList[crType].list'></goods-list>
      </scroll>
      <!-- 回到顶部组件 -->
      <!-- native修饰符 可监听组件的事件 -->
      <back-top @click.native="backTop" v-show="isShow"></back-top>
     
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

import {getHomeMultidata,getHomeGoods} from '../../network/home'
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
          isShow:false,//是否显示回到顶部图标
      }
  },
 created(){
     this._getHomeMultidata()
     this._getHomeGoods('pop')
     this._getHomeGoods('new')
     this._getHomeGoods('sell')
     //监听商品列表发出来的图片加载完成loadOK事件 
     //this.$bus.$on('name')接收事件
     this.$bus.$on('loadOK',()=>{
         console.log('加载成功')
         this.$refs.scroll.refresh()
     })

 },
 methods:{
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
     },
     backTop(){
        //  通过this.$refs.name.方法名 可以获取到组件内部的方法
       this.$refs.scroll.scrollTo(0,0,500)
     },
     //监听首页的滚动距离控制回到顶部的隐藏和显示
     HomeScroll(postion){
         //positon是负值
       this.isShow = -(postion.y)>1000
     },
     //上拉加载更多更多时调用商品数据
     loadMore(){
         console.log('shangla')
       this._getHomeGoods(this.crType)
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
    /* postion sticky 当滚动到44px后会自动变成fixed的状态 */
    position: sticky;
    top: 44px;
    z-index: 9;
    background-color: #fff;
}
.nav-bar{
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    z-index: 9;
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

