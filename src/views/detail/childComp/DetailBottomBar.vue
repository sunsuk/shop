<template>
  <div class="bottom-bar">
      <div class="bottom-box">
          <div class="bar-item">
              <div><i class="serve icon"></i></div>
              <div style="margin-left:4px">客服</div>
          </div>
          <div class="bar-item">
              <div><i class="shop icon"></i></div>
              <div>店铺</div>
          </div>
          <div class="bar-item">
              <div><i class="collect icon"></i></div>
              <div>收藏</div>
          </div>
          <div class="buy-and-add">
<div class="addCart" @click="addToCart">加入购物车</div>
          <div class="buy">购买</div>
          </div>
          

      </div>
  </div>
</template>

<script>
export default {
  methods:{
      addToCart(){
          this.$emit('addCart')
      }
  }
}
</script>

<style scoped>
.bottom-bar{
    height: 49px;
    background-color: #fff;
    position: relative;
    left: 0;
    right: 0;
    z-index: 20;
    width: 100%;
    bottom: 0;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.bottom-box{
  display: flex;
}
.bar-item{
    flex: 1;
    font-size: 14px;
}
.bar-item .icon{
    display: block;

    width: 18px;
    height: 18px;
    background: url('../../../assets/img/detail/detail_bottom.png') no-repeat;
    background-size: 100%;
    margin-left: 10px;
    margin-top: 6px;

}
.bar-item .serve{
    background-position: 0 -43px;
    
}
.bar-item .shop{
    background-position: 0 -80px;
      
}
.bar-item .collect{
    background-position: 0 0px;

}
.bar-item div:nth-of-type(2){
    margin-top: 4px;
    margin-left: 4px;
}
.addCart,.buy{
    width: 110px;
    height: 40px;
    line-height: 40px;
    align-self: center;
    text-align: center;
    margin-top: 4px;
    color: #fff;
    font-size: 14px;

}
.addCart{
    background: linear-gradient(90deg,#ffd01e,#ff8917);
    border-radius: 27px 0 0 27px;
}
.buy-and-add{
    width: 220px;
    margin-right: 10px;
    display: flex;
}
.buy{
    background: linear-gradient(90deg,#ff6034,#ee0a24);
    border-radius: 0 27px 27px 0;

}

</style>