<template>
  <div class="wrapper">
      
        
      <nav-bar>
          <div slot='center'>分类</div>
      </nav-bar>
         
      
    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

// better-scroll的外层必须设置高度 而且最外层只能包裹一个整体的div 
import BScroll from 'better-scroll'
export default {
components:{
     NavBar
 },
  data(){
      return{
          scroll:null
      }
  },
 
  
}
</script>

<style>
.wrapper{
    height: 200px;
    background: red ;
    overflow: hidden;
}
</style>