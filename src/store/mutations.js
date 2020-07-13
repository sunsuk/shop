import {ADDTOCART,ADDCOUNT,SETLOADING,SET_CART_LIST,CLEAR_CART_LIST} from './mutations-types'

import {Toast} from 'vant'
export default {
  //第一次添加入购物车
    [ADDTOCART](state,payload){
     payload.count = 1  
     payload.checked = false
     state.cartList.push(payload)
     Toast({
       type:"success",
       message:'加入购物车成功！',
       forbidClick:true,
       duration:1500
     })
     //json.stringigy将对象转json字符串
     localStorage.setItem("cartList",JSON.stringify(state.cartList))
    },
    //第二次及以上次数 
    [ADDCOUNT](state,payload){
      payload.count +=1
      Toast({
        type:"success",
        message:`当前商品数量为${payload.count}`
      })
      //将购物商品存储起来
      localStorage.setItem('cartList',JSON.stringify(state.cartList))
    },
    //设置请求加载动画
    [SETLOADING](state,bol){
      state.isLoading = bol
    },
    //购物车数据本地存储
   [SET_CART_LIST](state,data){
      state.cartList = data
   },
   //清空购物车
   [CLEAR_CART_LIST](state){
    // result   判断没选中的数据
    let result  = state.cartList.filter(item=>item.checked !== true)
    //选中的数据就清空
    if(result.length === 0 ){
      localStorage.removeItem('cartList')
      state.cartList = []
    }else{
        //没选中的数据继续存储起来
        state.cartList = result
        localStorage.setItem('cartList',JSON.stringify(state.cartList))
    }

   }

    
 }