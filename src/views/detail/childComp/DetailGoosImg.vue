<template>
  <div class="detail-goods-img" v-if="Object.keys(goodsImage).length!==0">
   <div class="desc-info clear-fix" >
       <div class="left-line"></div>
       <div class="desc-box">{{goodsImage.desc}}</div>
       <div class="right-line"></div>
   </div>
   <div v-for="(item,index) in goodsImage.detailImage " :key="index">
       <div class="key">{{item.key}}</div>
       <div class="img-list">
           <img :src="img" alt="" v-for="(img) in item.list" :key="img" @load="listLoad">
       </div>
   </div>
  </div>
</template>

<script>
export default {
  props:{
      goodsImage:{
          type:Object
      }
  },
  data(){
      return{
          counter:0,//
          imgLenth:0//计算图片的个数

      }
  },
  methods:{
      listLoad(){
          //加载一张图就加一 只会执行一次
          this.counter +=1
          if(this.counter === this.imgLenth){
              
              this.$emit('goodsImgLoad')
          }

      }
  },
  watch:{
      //监听图片下载的个数
      goodsImage(){
        this.imgLenth = this.goodsImage.detailImage[0].list.length
      }
  }
}
</script>

<style scoped>
.detail-goods-img{
    padding: 20px 0;
}
.desc-info{
    width: 100%;
    padding: 0 15px;
}
.left-line , .right-line{
    width: 100px;
    background-color: #a3a3a5;
    height: 2px;
    position: relative;
}
.left-line{
    float: left;
}
.right-line{
    float: right;
}
.desc-box{
    padding: 15px 0;
    text-align: center;
}
.right-line::after,
.left-line::before
{
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background-color: #333;
    position: absolute;
    bottom: 0;
}

.right-line::after{
    right: 0;
}
.key{
    text-align: left;
    margin-left: 15px;
    margin-bottom: 15px;
}
.img-list img{
    width: 100%;
}
</style>