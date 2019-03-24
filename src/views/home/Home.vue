<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">罗健文真牛逼</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {};
  },
};
</script>

<style>
  .home-nav{
    background: var(--color-tint);
    color: white
  }
</style>
