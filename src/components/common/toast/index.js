const myToast = {}

import MyToast from './MyTost.vue'
//1.在启动项目时 下载mytoast 
 myToast.install =function(Vue){
//2.建立toast构造器     
   const toastConstrctor =  Vue.extend(MyToast)
//3.用new的方式建立一个组件对象
   const toast = new toastConstrctor()
//4.将组件对象挂载在某个元素
   toast.$mount(document.createElement('div')) 
//5.将挂载好的元素显示在body上
   document.body.appendChild(toast.$el)     
//6.将toast赋值给vue的原型
   Vue.prototype.$mytoast = toast
}

//7.导出toast 
export default myToast
