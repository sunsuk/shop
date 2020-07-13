
import Vue from 'vue'
import VueRouter from 'vue-router'


// 重写路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// 重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Vue.use(VueRouter)


//引入组件
const Home = () =>import('views/home/Home')
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');
const Detail = () => import('views/detail/Detail');

const routes =[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/cart',component:Cart},
    {path:'/profile',component:Profile},
    {path:'/detail',component:Detail},
]
const index  =  new VueRouter({
    mode:"history",
    routes
})
export default index