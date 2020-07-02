import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
//给vue的原型绑定一个事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
