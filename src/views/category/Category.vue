<template>
  <div class="category">
      
        
      <nav-bar class="category-nav">
          <div slot='center'>商品分类</div>
      </nav-bar>
     <slider-bar :slide-bar-list='getCategoryList' @slideBarItemClick='slideBarItemClick'></slider-bar>
     <scroll class="content-height">
      <subcategory :subcategory-list='subcategoryList'></subcategory>   
      <tab-control :titles="['流行','新款','精选']" ref="control" @tabClick='typeClick'></tab-control>
      <goods-list :goods='categoryDetailList'></goods-list>
     </scroll>  
    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

import SliderBar from './childComp/SliderBar'
import Subcategory from './childComp/Subcategory'

import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import { getCategory, getCategoryDetail, getSubcategory } from "@/network/category";

export default {
components:{
     NavBar,
     SliderBar,
     Subcategory,
     TabControl,
     GoodsList,
     Scroll
 },
 data(){
     return{
        getCategoryList:[],//侧边栏请求数据
        currentIndex:0,
        keyList:[],//key存储
        subcategoryList:[],//右边商品存储
        categoryDetailList:[],//tab商品
     }
 },
created(){
  this.getCategory()
 },
 methods:{
     //获取左侧侧边栏标题
   getCategory(){
     getCategory().then(res=>{
       console.log(res)
       this.getCategoryList = res.data.category.list
       this.$nextTick(()=>{
        //加载后显示第一个主题的商品
       this.getSubcategory(this.getCategoryList[0].maitKey)
       //显示第一个tab中的商品
       this.getCategoryDetail(this.getCategoryList[0].miniWallkey,'pop')
       })
        
     })
     
   },
   slideBarItemClick({maitKey,index}){
    this.currentIndex = index 
    this.getSubcategory(maitKey)
    //每次点击切换侧边栏初始化currentIndex
     this.$refs.control.curentIndex = 0
     //显示第一个tab中的商品
     this.getCategoryDetail(this.getCategoryList[this.currentIndex].miniWallkey,'pop')
   },
   //获取右侧商品信息
   getSubcategory(key){
    getSubcategory(key).then(res=>{
        // console.log(res)
     this.subcategoryList = res.data.list
    })
   },
   getCategoryDetail(key,type){
       getCategoryDetail(key,type).then(res=>{
           console.log(res)
           this.categoryDetailList = res 
       })
   },
   typeClick(index){
    //    console.log(index)
       const tabType = ['pop','new','sell']
    //    console.log(this.getCategoryList[this.currentIndex].miniWallkey)
       this.getCategoryDetail(this.getCategoryList[this.currentIndex].miniWallkey,tabType[index])
   }
 }
 
  
}
</script>

<style scoped>
.category{
    height: 100vh
 
}
.category-nav{
    color: #fff;
    background-color: #ff8198;
}
.content-height{
    position: absolute;
    left: 100px;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden
}
</style>