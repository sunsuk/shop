<template>
<div>
  <!-- 商品标题 价格等消息 -->
  <div class="detail-base" v-if="Object.keys(goods).length !== 0">
      <div class="goods-title" >
          {{goods.title}}
      </div>
      <div class="price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
      </div>
      <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>

     <div class="info-serve">
         <span v-for="(item,index) in goods.services.length-1" :key="index"    class="info-service-item">
            <img :src="goods.services[item-1].icon" alt="">
            <span>{{goods.services[item-1].name}}</span>
         </span>
     </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
      goods:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>
.detail-base{
  width:100%;
  color: #999;
  border-bottom: 4px solid #f2f5f8;
  padding: 0 10px  ;
  margin-top: 10px;
}
.goods-title{
    font-size: 14px;
    color: #222;
}
.price{
    margin-bottom: 20px;
    margin-top: 10px;
}
.n-price{
    font-size: 20px;
    color: #ff5777;
}
.o-price{
    color: gary;
    margin-left: 5px;
    text-decoration: line-through;
    font-size: 12px;
}
.discount{
    font-size: 12px;
    position: relative;
    top: -4px;
    margin-left: 10px;
    color: #fff;
    border-radius: 8px;
    padding: 3px 6px;

}
.info-other{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 6px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    line-height: 10px;
    padding-bottom: 6px;
}
.info-serve{
  display: flex;
  justify-content: space-between;
  line-height: 53px;
  font-size: 14px;
}
.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}

.info-service-item span {
  font-size: 13px;
  margin-left: 5px;
  color: #333333;
}
</style>