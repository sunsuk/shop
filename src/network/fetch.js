//在这个文件里面封装axios 
import axios from 'axios'
export function fetch(config){
    //1创建axios 实例
      const service = axios.create({
        baseURL : "http://123.207.32.32:8000/api/m3",
          timeout:10000,
        //   headers:{}
      })
    //2为axios设置拦截器
    //2.1 设置请求拦截器
    service.interceptors.request.use(config=>{
        // console.log(config) //请求成功拦截配置 比如baseURL  timeout 
        //如果拦截掉不返回出去页面请求的位置就会报错 
        //拦截器的作用 1是给config中设置headers 2可以做一个请求的动画 3 让每个请求携带自定义token
        // if (store.getters.token) {
        //     config.headers['X-Token'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
        //   }
        return config
    },err=>{
        console.log(err)//请求失败后来这里
    })
    //3 设置响应拦截器 
    service.interceptors.response.use(res=>{
     //响应成功后的操作
    //  console.log(res)
     return res.data
    },err=>{
     console.log(err)
    })
      //4发送网络请求
      return  service(config)
}