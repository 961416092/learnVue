<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">罗健文真牛逼</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banner:null,
      recommends:null
    };
  },
  create() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.bannre=res.data.banner;
      this.recommends=res.data.recommend.list;
    }).catch((err) => {
      
    });
  }
};
</script>

<style>
  .home-nav{
    background: var(--color-tint);
    color: white
  }
</style>
