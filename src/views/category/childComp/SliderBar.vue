<template>
  <div class="silider-bar">

      <Scroll class="content-height">
       <template v-for="(item,index) in slideBarList" > 
          <button :key="index"
           class="slider-item"
           :class="currentIndex === index ? 'active':''"
           @click="slideBarItemClick(item,index)"
           >
            {{item.title}}
          </button>
       </template>
             
         
      </Scroll>

  
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  components:{
     Scroll
 },
 props:{
   slideBarList:{
     type:Array,
     default(){
       return []
     }
   }
 },
 data(){
   return {
     currentIndex:0
   }
 },
 methods:{
 slideBarItemClick(item,index){
  this.currentIndex = index
   const obj = {
     maitKey:item.maitKey,
     index
   }
   this.$emit('slideBarItemClick',obj)
 }
   
 }

}
</script>

<style scoped>
.silider-bar{
    height: calc(100% - 44px - 49px);

}

.content-height{
    height: 100%;
    overflow: hidden;
    width: 100px;
  background-color: #f6f6f6;

}
.slider-item{
   font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  text-align: center;
  color: #666666;
  border: 0;
  outline: none;
  background: none;
}
.slider-item.active{
  border-left: 3px solid #ff5777;
  font-weight: 700;
  color: #ff5777;
  background-color: #fff;
}
</style>