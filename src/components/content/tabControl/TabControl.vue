<template>
  <div class="tab-control">
      <div 
       v-for="(item,index) in titles"
       :key="index"
       class="control-item"
       :class="{active:index === curentIndex}"
       @click="itemClick(index)"
       >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
 props:{
     titles:{
         type:Array,
         default(){
             return []
         }
     }
 },
 data(){
     return{
         curentIndex:0
     }
 },
 methods:{
     itemClick(index){
     this.curentIndex = index  
     }
 }
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
}
.control-item{
    flex: 1;
}
.control-item span{
    padding: 5px;
    font-size: 15px;
}
.active{
    color: #ff5777;
}
.active span{
    border-bottom: 2px solid #ff5777;
   
}
</style>