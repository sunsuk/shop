<template>
  <div >
      <div class="comment-info" v-if="Object.keys(commentInfo).length !==0">
     <div class="comment-top">
         <span>用户评价</span><span>更多 <i class="more-icon"></i></span>
     </div>
     <div class="user-cotent">
         <div class="content-top">
             <img :src="commentInfo.user.avatar" alt="">
             <div>{{commentInfo.user.uname}}</div>
         </div>
         <div class="commet-desc">{{commentInfo.content}}</div>
         <div class="time-and-size"><span class="time">{{commentInfo.created | time}}</span><span style="margin-left:10px">{{commentInfo.style}}</span></div>
         <div class="comment-image-box">
         <img :src="item" v-for="(item,index) in commentInfo.images " :key="index" alt="" class="commet-img">

         </div>
     </div>
    </div>
    <div v-else style="color:red" class="comment-info">暂无评论</div>
  </div>  
</template>

<script>
import {formatDate} from 'common/utils'
export default {
 props:{
     commentInfo:{
         type:Object,
         default(){
             return{}
         }
     }
 },
 filters:{
     time(value){
         let date = new Date(value*1000)
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
     }
 }
}
</script>

<style scoped>
.comment-info{
    padding: 20px 12px;
    border-bottom:3px solid  #f2f5f8;
}
.more-icon{
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    transform: rotate(135deg);


}
.comment-top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #f2f5f8;

}
.commet-desc{
    padding: 10px 0;
    font-size: 15px;
    color: #777;
}
.content-top{
    /* border-bottom: 1px solid #ccc; */
}
.user-cotent .content-top{
   display: flex;  
   padding: 10px 0;
}
.content-top img{
    width: 40px;
    height: 40px;
    /* border: 1px solid #ccc; */
    border-radius: 50%;
}
.content-top div{
    align-self: center;
    margin-left: 10px;
    color: #333;
}
.time-and-size{
    color: #ccc;
    font-size: 12px;
    padding: 10px 0;
}
.commet-img{
    /* display: block; */
    width: 60px;
    height: 60px;
    /* border: 1px solid yellow; */
    margin-top: 10px;
    margin-left: 10px;
}
.comment-image-box{
    display: flex;
}
</style>