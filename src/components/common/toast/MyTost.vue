<template>
  <div v-show="isShow" class="mytoast">
    <div >{{msg}}</div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          isShow:false,
          msg:''
      }
  },
  methods:{
      show(msg,time){
          this.isShow = true 
          this.msg = msg
          setTimeout(()=>{
          this.isShow = false
          this.msg = '' 
           
          },1500)
      }
  }
}
</script>

<style scoped>
.mytoast{
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
}
</style>