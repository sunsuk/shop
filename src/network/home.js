import {fetch} from './fetch' 
//轮播图
export function getHomeMultidata(){
    return fetch({
        url:'/home/multidata'
    })  
}
//商品列表
export function getHomeGoods(type,page){
   return fetch({
       url:'/home/data',
       params:{
           type,
           page
       }
   })
}