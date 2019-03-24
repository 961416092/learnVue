<template>
  <div class="nav-bar">
    <!-- 用div把slot包装起来,设置样式 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;

    /* 阴影 */
    box-shadow: 0 1px 10px rgba(100,100,100,.5);
  }

  .left,.right{
    width: 60px;
  }

  .center{
    flex: 1;
  }
</style>
