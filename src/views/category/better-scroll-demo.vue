<template>
  <div class="wrapper">
      
        <div class="content">
            <nav-bar>
          <div slot='center'>分类</div>
      </nav-bar>
          <ul>
              <button @click="clickme">按钮</button>
          <li>分类列表1</li>
          <li>分类列表2</li>
          <li>分类列表3</li>
          <li>分类列表4</li>
          <li>分类列表5</li>
          <li>分类列表6</li>
          <li>分类列表7</li>
          <li>分类列表8</li>
          <li>分类列表9</li>
          <li>分类列表10</li>
          <li>分类列表1</li>
          <li>分类列表2</li>
          <li>分类列表3</li>
          <li>分类列表4</li>
          <li>分类列表5</li>
          <li>分类列表6</li>
          <li>分类列表7</li>
          <li>分类列表8</li>
          <li>分类列表9</li>
          <li>分类列表10</li>
          <li>分类列表11</li>
          <li>分类列表12</li>
          <li>分类列表13</li>
          <li>分类列表14</li>
          <li>分类列表15</li>
          <li>分类列表16</li>
          <li>分类列表17</li>
          <li>分类列表18</li>
          <li>分类列表19</li>
          <li>分类列表20</li>
          <li>分类列表21</li>
          <li>分类列表22</li>
          <li>分类列表23</li>
          <li>分类列表24</li>
          <li>分类列表25</li>
          <li>分类列表26</li>
          <li>分类列表27</li>
          <li>分类列表28</li>
          <li>分类列表29</li>
          <li>分类列表30</li>


          </ul>
      </div>
    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

// better-scroll的外层必须设置高度 而且最外层只能包裹一个整体的div 
import BScroll from 'better-scroll'
export default {
components:{
     NavBar
 },
  data(){
      return{
          scroll:null
      }
  },
  mounted(){
      //better的属性  
    //   probeType是否检测手指滚动的距离
    //0-1都是不检测 2是检测但是不包括惯性滚动的距离 3是只要滚动就检测
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
          probeType:3,
          pullUpLoad:true,
          click:true//加上才能检测点击事件

      })

   
      this.scroll.on('scroll',(postion)=>{
         //  检测滚动的距离 y轴是负数 得到结果： {x: 0, y: -258.546}
        //   console.log(postion)
      })

      this.scroll.on('pullingUp',()=>{
          //pullingUp是检测上拉加载更多的事件 只会执行一次
         
          console.log('上拉加载更多')
           //要加上finishPullUp才能执行多次
          this.scroll.finishPullUp()
      })
  },
  methods:{
      clickme(){
          console.log('click')
      }
  }
}
</script>

<style>
.wrapper{
    height: 200px;
    background: red ;
    overflow: hidden;
}
</style>