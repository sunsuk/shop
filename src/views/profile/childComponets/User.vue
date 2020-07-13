<template>
  <div class="user">
      
      <div class="user-left">
        <img src="../../../assets/img/profile/user.png" alt="">
      </div>
      <div class="user-login">
          <div style="font-size:14px"  > <router-link :to="{path:'/login'}" >登录/注册</router-link>
              </div>
          <span class="no-iphone">
           <i class="iphone-icon"></i>  <span>暂无绑定手机号</span> 
          </span>
      </div>
      <div class="user-back">
     <i class="back-icon"></i>
      </div>
  </div>
</template>

<script>
export default {
 methods:{
     login(){
         this.$router.path({path:'/login'})
     }
 }
}
</script>

<style scoped>
.user{
    display: flex;
    padding: 10px;
    background-color: var(--color-tint);
    color: #fff;
    align-items: center;
}
.user-left{
   width: 64px;
}
.user-left img{
 width: 60px;
 height: 60px;
}

.user-login{
 align-items: center;
    font-size: 12px;
    padding-left: 6px;
    flex: 1;
}
.no-iphone{
    display: block;
    margin-top: 10px;
}
.no-iphone .iphone-icon{
    content: "";
    display: inline-block;
    height: 20px;
    width: 18px;
    background: url('../../../assets/img/profile/iphone.png') no-repeat;
    background-size: 100%;
    vertical-align: middle;

}
.user-back{
    width: 20px;
    justify-content: flex-end;
}
.back-icon{
    display: block;
    height:20px ;
    width: 20px;
    background: url('../../../assets/img/profile/back.png') no-repeat;
    background-size: 100%;
}
</style>