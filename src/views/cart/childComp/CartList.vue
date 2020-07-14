<template>
   <div class="cart-list">
       <scroll class="cotent" ref="scroll">
          <cart-list-item v-for="(item,index) in cartList" :key="index" 
          :product='item'
          @itemChange='itemChange(item)'
          >

          </cart-list-item>
       </scroll>
       <!-- 底部栏 -->
      <div class="bottom-nav">
        <div class="bottom-left">
        <van-checkbox  checked-color="#ff5777"  v-model="checkedAll" @click="allCheck">全选</van-checkbox>
        <div class="all-count"><span>合计：</span>￥{{ Number(totalMoney).toFixed(2) }}<span></span>元</div>
        </div>
       
        <div class="order-form" @click="buyAll"><button>结算({{length}})</button></div>
      </div>
   </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import {Toast} from 'vant'
import { mapGetters ,mapActions,mapMutations} from 'vuex'
export default {
   components:{
       Scroll,
       CartListItem
   },
   data(){
       return{
        checkedAll:false
       }
   },
   computed:{
       ...mapGetters(['cartList']),
       //计算总价格
       totalMoney(){
         return  this.cartList.
         filter(item=>item.checked ===true).reduce((prevale,item)=>{
            
             return prevale +item.count * item.price 
         },0)
       },
       length(){
           return this.cartList.filter(item=>item.checked).length
       },
      

     
   },
   mounted(){
       this.$refs.scroll.refresh()
   },
 created(){
     //加载完成后取出本地存储的数据
     let list = JSON.parse(localStorage.getItem('cartList') ) || []
     if(list){
     this.setCartList(list)
     }
 },
   methods:{
       ...mapMutations(['setCartList','clearCartList']),
       allCheck(){
           //全选 和全不选
         this.cartList.forEach(element => {
             element.checked  = this.checkedAll
           
         });
       },
       //反选
      itemChange(){
        let result = this.cartList.filter(item=>item.checked ===true )
         this.checkedAll = result.length >0 && result.length === this.cartList.length
      },
      //结算 清空购物车
      buyAll(){
         //如果选中的数量 = 0 就提示没选中一个商品
         if(this.length <1){
             this.$toast({
                 type:'fail',
                 message:'您还没有选中任何商品哦'
             })
         }else{
             this.$dialog.confirm({
               title:'温馨提示',
               message:'您确定要提交订单吗？'
             }).then(()=>{
                 this.$toast({
                     type:'success',
                     message:`提交${this.length}条数据成功`,
                     duration:1500,
                     forbidClick:true
                 })
                 //清空购物车数据
                 setTimeout(() => {
                     this.checkedAll = false
                     this.clearCartList()
                 }, 1500);
             })
         }
      }
   }
   
   
}
</script>

<style scoped>
.cart-list{
    height: calc(100% - 44px - 49px - 49px);
}
.cotent{
    height: 100%;
    overflow: hidden;
}
.bottom-nav{
    position: absolute;
    bottom: 49px;
    height: 50px;
    width: 100%;
    line-height: 50px;
    display: flex;
    border-top:  1px solid #ccc;
    background-color: #fff;
}
.bottom-left{
    display: flex;
    width: 60%;
    flex: 1;
    padding: 0 10px;
}
.order-form button{
   border:none;
   background-color: rgb(255, 87, 119);
   color: #fff;
   padding: 2px 18px;
   border: 1px solid rgb(255, 87, 119);
   border-radius: 30px;
   height: 100%;
   line-height: 100%;
}
.order-form{
   display: flex;
   height: 100%;
   padding: 4px;
   
}
.all-count{
    padding-left: 30px;
}
.all-count span:nth-of-type(2){
    color: red;
    margin-right: 10px;
}
</style>