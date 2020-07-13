<template>
  <div class="bottom-bar">
      <div class="bottom-box">
          <div class="bar-item">
              <div><i class="serve icon"></i></div>
              <div style="margin-left:4px">客服</div>
          </div>
          <div class="bar-item" 
           @click="$router.push('/cart')"

          >
              <div class="cart">
                  <img src="~assets/img/detail/detail-car.png" alt="">
              </div>
              <div style="margin-left:1px">
                  购物车

              </div>
          </div>
          <div class="bar-item defult">
              <div @click="collectMe" ><i class="collect icon"
              :class="{'iscollect':isCollect}"
              ></i></div>
              <div>{{collect}}</div>
          </div>
          
          <div class="buy-and-add">
<div class="addCart" @click="addToCart">加入购物车</div>
          <div class="buy"
          
          
           >立即购买</div>
          </div>
          

      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
   data(){
       return{
           collect:'收藏',
           isCollect:false
       }
   }, 
   //每次刷新获取一次购物车的数据
   created(){
     let list  = JSON.parse(localStorage.getItem('cartList'))
     if(list){
         this.$store.commit('setCartList',list)
     }
   },
  methods:{
      ...mapMutations(['setCartList']),
      addToCart(){
          this.$emit('addCart')
      },
      collectMe(){
          if(!this.isCollect){
              this.collect = '已收藏'
              this.isCollect = true
          }else{
              this.collect ='收藏'
              this.isCollect = false
          }
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
.bar-item .cart img{
    height: 18px;
    width: 18px;
    display: block;
    margin-left: 10px;
    margin-top: 6px;
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
.bar-item .icon.iscollect{
    background-position:0 -22px ;
    margin-left: 16px;
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