<template>
  <div class="subcategory">
     
        <div class="subcategory-item" v-for="(item,index) in subcategoryList" :key="index" >
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <p class="title">{{item.title}}</p>
        </div>
       
    
  </div>
</template>

<script>
export default {
 props:{
     subcategoryList:{
         type:Array,
         default(){
             return []
         }
     }
 }
}
</script>

<style scoped>
.subcategory{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
}
.subcategory-item{
   display: flex;
   justify-content: center;
   align-items: center;
   /* 垂直显示 */
   flex-direction: column; 
   width: 80px;
   height: 100px;
}
.subcategory-item img{
    width: 65px;
    height: 65px;
   margin-bottom: 10px;

}
.title{
    font-size: 14px;
}
</style>