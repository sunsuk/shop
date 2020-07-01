<template>
  <div class="detail-params" v-if="Object.keys(paramsInfo).length!==0">
   <p class="info-msg">参数信息</p>
   <!-- 遍历table决定有几个表格 tr是根据数组的长度决定行数 td是根据数组的长度决定列数 -->
   <table v-for="(item,index) in paramsInfo.sizes" :key="index" class="size-info">
       <tr v-for="(tr,indey) in item" :key="indey">
           <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
       </tr>
   </table>
   <table >
       <tr v-for="(item,index) in paramsInfo.infos" :key='index'>
           <td class="info-key" >{{item.key}}</td>
           <td class="info-value">{{item.value}}</td>


       </tr>
   </table>
  </div>
</template>

<script>
export default {
  props:{
      paramsInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  created(){
      console.log(this.paramsInfo)
  }
}
</script>

<style scoped>
.info-msg{
    padding-bottom: 10px;
    font-size: 16px;
}
.detail-params{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 3px solid #f2f5f8;
}
.detail-params table{
    width:100%;
    border-collapse: collapse;
}
.detail-params table td{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
table tr{
    height: 40px;
}
.info-value{
    color: #eb4868;
}
.info-key{
    width: 90px;
}
</style>