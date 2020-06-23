<template>
  <div id="tab-bar-item" @click="itemClick">
    
         <div class="defult" v-show="!isActive">
              <slot name="default-icon"></slot>
         </div>
          <div class="active" v-show="isActive">
             <slot name="active-icon"></slot>
          </div>
     
     <div class="item-text" :style="isActiveStyle">
         <slot name="text"></slot>
     </div>
    
     
  </div>
</template>

<script>
 
export default {
 name:'TabBarItem',
 props:{
     link:{
         type:String,
         required:true
     }
 },
 methods:{
     itemClick(){
       //点击时 切换到对应路由
       this.$router.replace(this.link)
     }
 },
 computed:{
     isActive(){
        //  console.log(this.$route)
        return this.$route.path.indexOf(this.link) !== -1
     },
     isActiveStyle(){
       return this.isActive?{'color':'red'}:{}
     }
 }
}
</script>

<style>
#tab-bar-item{
  flex: 1;

}
.defult img ,.active img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
}
.item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
    }
</style>