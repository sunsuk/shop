<template>
  <div class="cart">
      <nav-bar class="cart-nav">
          <div slot='center'>购物车({{length}})</div>
      </nav-bar>
      <cart-list></cart-list>

      
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComp/CartList'
//通过mapGetters 得到vuex中的getters
import {mapGetters} from 'vuex'
export default {
components:{
     NavBar,
     CartList
 },
 computed:{
     //第一种写法 ...mapGetters(['方法名称'])
    //  ...mapGetters(['cartLength'])
     //第二种写法 ...mapGetters({取代名:'方法名'})
    ...mapGetters({length:'cartLength'})

 },
 
}
</script>

<style scoped>
.cart-nav{
    color: #fff;
    font-weight: 700;
    background-color: var(--color-tint);
}
.cart{
    height: 100vh;    
}

</style>