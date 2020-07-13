export default {
  //购物车改变 
  addCart({ state, commit }, payload) {
    //本地存储的值赋值给cartList
    //  let list = JSON.parse(localStorage.getItem('catList')) || []
    // if (list) {
    //  state.cartList = list
      //判读是否已经添加过购物车.
      //find函数找到相同的iid find找到一个就不找了

      let oldProduct = state.cartList.find(item => item.id === payload.id)

      if (oldProduct) { //判读是已经有的商品就count+1 多个方法写多个mutations比较明确
        commit('addCount', oldProduct)
        // res('商品数量加一')
      } else {//没有的商品就push到数组
        commit('addToCart', payload)
        //  res('商品添加入了购物车')      
      }
    // }else{
    //   commit('addToCart',payload)
    // }



  }
}