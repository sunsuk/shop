import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//1安装插件
Vue.use(Vuex)
//2创建store对象
const store = new Vuex.Store({
    state:{
        //购物车数据
        cartList:[],
        //是否请求加载
        isLoading:true
    },
    mutations,
    actions,
    getters
}) 
//3 挂载在vue实例上
export default store
//4 在main.js引入store
