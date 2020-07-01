<template>
    <swiper ref="swiper" v-if="banners.length">
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    data(){
      return{
       isLoad:false
      }
    },
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    
    methods: {
      stopTimer() {
        this.$refs.swiper.stopTimer()
      },
      startTimer() {
        if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      imageLoad(){
        //只要获得一张图片  就对isLoad进行取反  后续的就不会进入到if分支语句中
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
