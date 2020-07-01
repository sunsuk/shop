<template>
  <div ref="nav">

    <nav-bar>
        <div slot='left' class="left-nav" @click="goBack" >
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot='center' class="nav">
            <div v-for="(item,index) in titles" :key="index"
             class="nav-item" @click="itemClick(index)"
             :class="{'active':currentIndex==index}"
             >{{item}}</div>
        </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
   components:{
       NavBar
   },
   methods:{
       itemClick(index){
           this.currentIndex = index
           this.$emit('itemClick',index)
       },
       goBack(){
       this.$router.go(-1)
       }
   },
   
}
</script>

<style scoped>
#child-nav{
    background: #fff;

}
.nav{
    display: flex;
    color: #666;
}
.nav-item{
    flex: 1;
    font-size: 13px;
}
.active{
    color:var(--color-tint)
}
.left-nav img{
  margin-top: 10px;
}

</style>