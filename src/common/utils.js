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

function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  
  // 时间格式化
  export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
  
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
  
    return fmt;
  }
  