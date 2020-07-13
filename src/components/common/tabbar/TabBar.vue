<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab-bar{
  border-top: 1px solid #eee;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px  rgba(150, 150, 150, .08);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 49px;
  display: flex;
  text-align: center;
}
</style>