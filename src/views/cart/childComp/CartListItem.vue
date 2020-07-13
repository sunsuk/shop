<template>
   <div class="cart-item">
     
          <div class="item-selector">
              <van-checkbox v-model="product.checked" @change="itemChange" checked-color="#ff5777"></van-checkbox>
          </div>
          <div>
          </div>
          <div class="item-img">

              <img :src="product.image" alt="商品图片">
          </div>
          <div class="item-info">
              <div class="item-title">{{product.title}}</div>
              <div class="item-desc">{{product.desc}}</div>
              <div class="bottom-info">
                  <div class="item-price">￥{{product.price}}</div>
             
                      <van-stepper v-model="product.count" 
                      disable-input />
                      
              </div>
          </div>
    
   </div>
</template>

<script>
import {ADDTOCART,ADDCOUNT} from '../../../store/mutations-types'

import {mapGetters , mapMutations} from 'vuex'
export default {
 props:{
     product:{
         type:Object,
         default(){
             return {}
         }
     }
 },
 data(){
     return{
        checked:true,
        itemValue:0
     }
 },
 watch:{
    
 },
 methods:{
     //引入mutaions的函数
     ...mapMutations(['setCartList','clearCartList']),
    itemChange(){
        this.$emit('itemChange',this.product)
    }
 },
 
}
</script>

<style scoped>
.cart-item{
    padding: 5px;
     border-bottom: 1px solid #ccc;
     /* height: 120px; */
     display: flex;
     width: 100%;

}
.cart-item:last-child{
    border-bottom: 0;
}
 .product-desc{
     
 }
 .item-selector{
     display: flex;
     justify-content: center;
     align-items: center;
     width: 12%;
 }
 .item-img{
     padding: 5px;
 }
 .item-img img{
  display: block;
   width: 80px;
   height: 100px;
   border-radius: 5px;
   object-fit:cover;
 }
 .item-info{
     width: 80%;
     overflow: hidden;
     padding: 5px 10px;
     color: #333;
 }
 .item-title , .item-desc{
    
     overflow: hidden;
     white-space:nowrap;
     text-overflow: ellipsis;

 }
 .item-title{
      font-size: 18px;
 }
 .item-desc{
     margin-top: 10px;
     font-size: 14px;
 }
 .bottom-info{
     padding-top: 10px;
     display: flex;
     justify-content:space-between
 }
 .item-price{
     color: #ff4500;
 }
</style>