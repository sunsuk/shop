<template>
  <div id="Detail">
     <child-nav class="detail-nav" @itemClick='itemClick' ref="nav"></child-nav>

     <Scroll class="content" ref="scroll" :probe-type='3' @scroll='detailScroll' >

     
    <detail-swiper :top-images="topImages" class="detail-set-y"></detail-swiper>
     <detail-base-info :goods='goods'></detail-base-info>
     <detail-shop :shop='shop'></detail-shop>
     <detail-goods-img :goods-image='goodsImage' @goodsImgLoad='imgLoad' ></detail-goods-img>
     <detail-params-info :params-info='paramsInfo' ref="params" class="detail-set-y"></detail-params-info>
     <detail-comment-info :comment-info='commentInfo' ref="comment" class="detail-set-y"></detail-comment-info>
     <goods-list :goods='recommend' ref="recomend" class="detail-set-y" :is-recommend='true'></goods-list>
     </Scroll>
     <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
      <back-top @click.native="backTop" v-show="currentY>=1500"></back-top>
     
  </div>
</template>

<script>
import ChildNav from './childComp/childNavBar'
import DetailSwiper from './childComp/DetailSwiper'
import DetailBaseInfo from "./childComp/DetailBaseInfo"
import DetailShop from './childComp/DetailShop'
import DetailGoodsImg from './childComp/DetailGoosImg'
import DetailParamsInfo from './childComp/DetailParamsInfo'
import DetailCommentInfo from './childComp/DetailCommentInfo'
import DetailBottomBar from'./childComp/DetailBottomBar'
import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {debounce} from '../../common/utils'

import {ImgLoadListernerMinXi,backTopMixin}  from 'common/mixin' //1.引入混入代码
import{getDetail,Goods,Shop,GoodsParams,getRecommend} from 'network/detail'

import {mapActions} from 'vuex'
export default {
  name:'Detail',  
  data(){
    return{
      iid:null,
      topImages:[],//轮播图数据
      goods:{},//商品数据
      shop:{},//店铺数据
      goodsImage:{},//详情页图片
      paramsInfo:{},//详情尺码参数
      commentInfo:{},//评论信息
      recommend:[],//推荐信息
      // ImgLoadok:null,//离开后取消掉
      detailTopicY:[], //点击回到对应的主题
      topicClick:null,// 到主题后调用函数
      detailClass:[],//获取所有class的主题
      currentIndex:0,//当前的主题索引

    }
  },
  mixins:[ImgLoadListernerMinXi,backTopMixin], //2.使用混入代码
  components:{
    ChildNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsImg,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    BackTop,
    Scroll
  },
  created(){
        //在这里获取offsettop值不对 没完全渲染
    //1.保存每个iid的值
    this.iid = this.$route.query.iid
    //2.根据iid获取元素
     getDetail(this.iid).then(res=>{
        console.log(res)
        const datas = res.result
        //轮播图数据

        this.topImages = datas.itemInfo.topImages

        //商品数据
         this.goods = new Goods(datas.itemInfo,datas.columns,datas.shopInfo.services)
        //店铺数据
         this.shop = new Shop(datas.shopInfo)
         //详情页图片数据
         this.goodsImage = datas.detailInfo
         //尺码消息
         this.paramsInfo = new GoodsParams(datas.itemParams.info,datas.itemParams.rule)
        //评论信息
        if(datas.rate.cRate!==0){
        this.commentInfo = datas.rate.list[0]
        }
      //   this.$nextTick(()=>{//2在这里获取值不对 img可能没加载完成
      //     this.detailTopicY = []
      //     this.detailTopicY.push(this.$refs.params.$el.offsetTop)
      //     this.detailTopicY.push(this.$refs.comment.$el.offsetTop)
      //     // this.detailTopicY.push(this.$refs.recommend.$el.offsetTop)
      //     this.detailTopicY.push(this.$refs.recomend.$el.offsetTop)

      //  console.log(this.detailTopicY,'y')

      //   })

     })
     getRecommend().then(res=>{
       this.recommend = res.data.list
     })
  },
  methods:{
    //action的映射关系 也可以使用对象 改名
       ...mapActions(['addCart']),

    imgLoad(){
      this.myrefresh()
      this.getClassList()
    console.log(this.detailClass)

      //图片加载完成后获取y值 值不准确
      // this.detailTopicY.push(0)
      // this.detailTopicY.push(this.$refs.params.$el.offsetTop)
      // this.detailTopicY.push(this.$refs.comment.$el.offsetTop)
      // this.detailTopicY.push(this.$refs.recomend.$el.offsetTop)
    },
    itemClick(index){
      this.$nextTick(()=>{
        //获得所有符合的元素
         let el = document.getElementsByClassName('detail-set-y')
         //滑到对应位置 scrollToElement
         this.$refs.scroll.scrollToElement(el[index],200)
         
      })
     
    },
     //获取所有class="detail-set-y" 的元素
  getClassList(){//为滚到对应主题 文字变色做准备
    this.detailClass = []//
    //1.将伪数组转为真数组
    this.detailClass = Array.from(document.getElementsByClassName('detail-set-y'))
    let maxValue = 1000000//2.给数组末尾添加一个非常高的offsetTop值
    this.detailClass.push({offsetTop:maxValue})
  },
  //3.监听滚动主题的offsetTop改变index的值
  //[0,455,1900,2000]
  //当大于等于0和 小于455时 index 0
  //当大于等于455 小于1900  index 1
  //当大于等于1900 小于2000 index 2 大于2000 index3
  detailScroll(position){
    let Y = position? -position.y:0
    this.currentY = Y
    let len = this.detailClass.length-1
    for(let i =0; i<len; i++){
         if(Y>=this.detailClass[i].offsetTop && Y<this.detailClass[i+1].offsetTop){
           if(this.currentIndex !== i){ 
             this.currentIndex = i//等于改变index值
             this.$refs.nav.currentIndex = this.currentIndex
           }
         }
    }
  },
  addToCart(){
    const goodsObj = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.lowNowPrice,
        id: this.iid,
        shopTile:this.shop.name     
    }
    //发送给vuex 需要通过 mutations 这样可以监听state的改变
     this.$store.dispatch('addCart',goodsObj)
    

  }
  },
  mounted(){
    //图片加载完成后刷新页面
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.detailImgLoad = ()=>{
      refresh()
    }
    this.$bus.$on('loadOK',this.detailImgLoad)
   
  },
  //没使用keep-alive 就只能用destroyed了 销毁后取消监听
  destroyed(){
    this.$bus.$off('loadOK',this.detailImgLoad)
  },
 
 
}
</script>

<style scoped>
#Detail{
  position: relative;
  height: 100vh;
  z-index: 12;
  background-color: #fff;
}
.content{
  /*滚动区域 = 总高度 - 导航栏的高度 -底部的高度*/
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail-nav{
  background-color: #fff;
  z-index: 9;
  position: relative;
}
</style>