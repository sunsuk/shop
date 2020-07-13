import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import Mytoast from './components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'
import 'vant/lib/index.css'

//解决移动端300ms延迟 fastclick
import Fastclick from 'fastclick'
//图片懒加载

Vue.config.productionTip = false
Vue.use(vant)
Vue.use(Mytoast)

//给vue的原型绑定一个事件总线
Vue.prototype.$bus = new Vue()
//解决移动端300ms延迟
Fastclick.attach(document.body)

//使用懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/lazyImg.png')
})
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
