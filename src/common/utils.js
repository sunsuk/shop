// 防抖函数 解决调用次数过多的方法
export function debounce(fun,delay){
    let timer = null
    return function(...arg){
    // 清除上一次的定时器
    if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
           fun.apply(this,arg)
        },delay)
    }
}