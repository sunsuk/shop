<template>
  <div id="home">
      <nav-bar>
          <div slot='center'>购物街</div>
      </nav-bar>
      <!-- 轮播图 -->
      <home-swiper :banners='banners'></home-swiper>
      <!-- 圆点图 -->
      <recommend-view :recommend='recommend'></recommend-view>
      <!-- 大图 -->
      <feature-view></feature-view>
      <!-- 选项卡 -->
      <tab-control :titles="['流行','新款','精选']"></tab-control>
     <ul>
         <li>1</li>
         <li>1</li>
         <li>1</li>
         <li>1</li>
         <li>1</li>
         <li>1</li>
         <li>1</li>
         <li>1</li>

     </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from '../../network/home'
export default {
 components:{
     NavBar,
     HomeSwiper,
     RecommendView,
     FeatureView,
     TabControl
 },
  data(){
      return{
          banners:[],//轮播图数据
          recommend:[],//轮播图下方的圆圈图
      }
  },
 created(){
     this._getHomeMultidata()
 },
 methods:{
     //轮播图请求
     _getHomeMultidata(){
       getHomeMultidata().then(res=>{
         this.banners = res.data.banner.list
         this.recommend = res.data.recommend.list
     })
     }
 }
}
</script>

<style>

</style>