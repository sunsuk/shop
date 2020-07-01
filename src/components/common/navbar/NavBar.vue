<template>
  <div id="nav-bar">
    <div class="nav-left"><slot name='left'></slot></div>  
    <div class="nav-center"><slot name='center'></slot></div>  
     <div class="nav-right"><slot name='right'></slot></div> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav-bar{
    height: 44px;
    line-height: 44px;
    /* background-color: var(--color-tint);
    color: var(--color-background); */
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

    display: flex;
    text-align: center;
}
.nav-left{
    width: 60px;
}
.nav-right{
    width: 60px;
}
.nav-center{
    flex: 1;
}
</style>