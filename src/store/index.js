import Vue from 'vue'
import Vuex from 'vuex'
//1安装插件
Vue.use(Vuex)
//2创建store对象
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        //购物车改变
        addCart(state,payload){
            state.cartList.push(payload)
        }
    }
}) 
//3 挂载在vue实例上
export default store
//4 在main.js引入store
