<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Vue案例</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners:[
        {
          id:0,
          image:'http://www.gzevergrandefc.com/UploadFile/2019-03/05ffaafb-64ed-4a9e-ac3d-658b57c487c4.jpg',
        },
        {
          id:1,
          image:'http://www.gzevergrandefc.com/UploadFile/2019-03/c88cb387-4bae-4522-92a6-39004f351d4c.jpg',
        },
        {
          id:2,
          image:'http://www.gzevergrandefc.com/UploadFile/2019-03/cb975eef-d5eb-4e7b-8eae-6e9c98148e39.jpeg',
        },
        {
          id:3,
          image:'http://www.gzevergrandefc.com/UploadFile/2019-03/355707d0-3072-4456-a645-bd652a3acfab.jpg',
        },
      ],
      recommends:null
    };
  },
  create() {
    // 1.请求多个数据
    // getHomeMultidata().then((res) => {
    //   this.bannres=res.data.banner.list;
    //   this.recommends=res.data.recommend.list;
    // }).catch((err) => {
    // });
  }
};
</script>

<style>
  #home {
    position: relative;
    top: 88px;
  }

  .home-nav {
    /* background-color: var(--color-tint); */
    background-color:#f6f6f6;
    color: black;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  } */

  /* .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  } */
</style>
