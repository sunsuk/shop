<template>
  <div id="list">
     <div class="item" v-for="(item,index) in listData" :key="index" >
         <img :src="item.icon" alt="">
         <span class="info">{{item.info}}</span>
     </div>
  </div>
</template>

<script>
export default {
props:{
    listData:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.item{
    display:flex;
    font-size: 14px;
    align-items: center;
    padding: 10px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
}
.item img{
    width: 20px;
    height: 20px;
}
.info{
    margin-left: 5px;
}
</style>