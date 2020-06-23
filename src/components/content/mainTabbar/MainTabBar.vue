<template>
  <div>
   <tab-bar>
       <tab-bar-item link='/home'>
         <img src="../../../assets/img/tabbar/home.svg" alt="" slot="default-icon">
         <img src="~assets/img/tabbar/home_active.svg" alt="" slot="active-icon">
         <div slot='text'>首页</div>
       </tab-bar-item>
       <tab-bar-item link='/category'>
         <img src="~assets/img/tabbar/category.svg" alt="" slot="default-icon">
         <img src="~assets/img/tabbar/category_active.svg" alt="" slot="active-icon">
         <div slot='text'>分类</div>
       </tab-bar-item>
       <tab-bar-item link='/cart'>
         <img src="~assets/img/tabbar/cart.svg" alt="" slot="default-icon">
         <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="active-icon">
         <div slot='text'>购物车</div>
       </tab-bar-item>
       <tab-bar-item link='/profile'>
         <img src="~assets/img/tabbar/profile.svg" alt="" slot="default-icon">
         <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="active-icon">
         <div slot='text'>我的</div>
       </tab-bar-item>
      
   </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
  components:{
      TabBar,
      TabBarItem
  }
}
</script>

<style>

</style>