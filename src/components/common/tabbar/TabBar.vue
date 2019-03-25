<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
  #tab-bar{
    display: flex;
    background: var(--color-tint);

    /* 不论窗口滚动与否，元素都会留在那个位置。 */
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;

    /* 阴影 */
    box-shadow: 0 -1px 5px rgba(100,100,100,.5);
  }
</style>
