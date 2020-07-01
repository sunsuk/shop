<template>
    <div class="detail-swiper">
        <!-- v-if判读是否有图片 不能省略 -->
        <swiper class="detail-swiper" v-if="topImages.length">
            <swiper-item class="swiper-item" v-for="(item, index) in topImages" :key="index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
//引入轮播组件  获取 数据
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DevtailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>