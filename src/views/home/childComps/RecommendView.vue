<template>
  <div class="recommend-view">
     <div class="recommend-item" v-for="(item,index) in recommend" :key="index" >
         <a :href="item.link">
             <img :src="item.image" alt="">
             <div class="item-text">{{item.title}}</div>
         </a>
     </div>
  </div>
</template>

<script>
export default {
  props:{
      recommend:{
          type:Array,
          required:true
      }
  }
}
</script>

<style>
.recommend-view{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    width: 100%;
}
.recommend-item {
    flex: 1;
}
.recommend-item a{
    color: var(--color-text);
}
.recommend-item img{
    widows: 70px;
    height: 70px;
    margin-bottom: 10px;
}
.item-text{
    font-size: 12px;
}
</style>