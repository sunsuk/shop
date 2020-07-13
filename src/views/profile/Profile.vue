<template>
<div id="profile">
    <nav-bar class="nav-bar">
        <div slot="center">sunsuk商城</div>
    </nav-bar>

    <user></user>
    <div class="user-info">
        <div class="info-item">
            <div ><span class="info-num">10000</span>元</div>
            <div>我的余额</div>
        </div>
        <div  class="info-item">
             <div  ><span class="info-num">100</span>个</div>
            <div>我的优惠</div>
        </div>
        <div  class="info-item">
             <div ><span class="info-num">1000</span>分</div>
            <div>我的积分</div>
        </div>
    </div>
    <list-view :listData='profileListOne' class="list-bottom"></list-view>
    <list-view :listData='profileListTow' ></list-view>

</div>
</template>
<script >
import NavBar from 'components/common/navbar/NavBar'
import User from './childComponets/User'
import ListView from './childComponets/ListView'
export default{
    data(){
        return{
           profileListOne:[
               {icon:require('../../assets/img/profile/message.png'),info:'我的消息'},
               {icon:require('../../assets/img/profile/collcet.png'),info:'积分商城'},
               {icon:require('../../assets/img/profile/vipcar.png'),info:'会员卡'}
           ],
            profileListTow:[
               {icon:require('../../assets/img/profile/cart.png'),info:'我的购物车'},
               {icon:require('../../assets/img/profile/download.png'),info:'下载购物APP'}
           ],
        }
    },
    components:{
         NavBar,
         User,
         ListView
         
    }
}
</script> 
<style scoped>

#profile .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    border-bottom: none
}
.user-info{
    display: flex;
    text-align: center;
    border-bottom: 10px solid #eee;
    font-size: 13px;
    background: #eee;
}
.info-num{
    color: #ff5f3e;
    font-size: 18px;
    font-weight: 700;
}
.info-item{
    flex: 1;
    background: #fff;
    padding: 18px;
    margin-left: 1px;
}
.info-item div{
    margin-bottom: 4px
}
.list-bottom{
    border-bottom: 10px solid #eee;
}
</style>