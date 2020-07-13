<template>
  <div class="goods-list-box">
    <p class="recommend" v-show="isRecommend">推荐商品</p>
    
    <div class="goods-list">
      <!-- 循环部分 -->

      <div
        :key="index"
        @click="goodsClick(item)"
        class="goods-list-item"
        v-for="(item, index) in goods"
      >
        <img alt="" v-lazy=" item.img || item.image || item.show.img " @load="loadOK" />
        <div class="goods-info">
          <p>{{ item.title }}</p>
          <span class="price">¥{{ item.price }}</span>
          <span class="collect">{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    },
    isRecommend:{
      type:Boolean,
      default(){
        return false
      }
    }
   
  },
  computed:{
    //不同的组件调用层级的不一样
    // showImg(){
    //  return this.goods.image || this.goods.show.img 
    // }

  },
  methods: {
  
   //图片加载完毕发射事件
   loadOK(){
     //this.$bus.$emit('name') 发射事件
     this.$bus.$emit('loadOK')
   },
   goodsClick(item){
    // console.log(item.iid)
    this.$router.push({
      path:'/detail',
      //其他页面得到query是用this.route.query.iid
      query:{
        iid:item.iid
      }
    })
  }  ,
  
  },
 
  
};
</script>

<style scoped>
.goods-list-box {
  width: 100%;
}
.recommend{
  padding: 10px 10px;
  font-size: 16px;
}

.goods-list-box .recommend {
  font-size: 15px;
  margin-top: 10px;
  padding-left: 10px;
}

.goods-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}

.goods-list-item {
  font-size: 14px;
  position: relative;
  width: 48%;
  padding-bottom: 4px;
}

.goods-list-item img {
  display: block;
  width: 100%;
  height: 256px;
  border-radius: 5px;
  object-fit: cover;
}

.goods-info {
  font-size: 14px;
  overflow: hidden;
  margin-top: 4px;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.goods-info .price {
  margin-right: 30px;
  color: #ff5777;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  position: absolute;
  top: 0px;
  left: -16px;
  width: 14px;
  height: 14px;
  content: "";
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
