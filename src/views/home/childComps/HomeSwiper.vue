<template>
  <div id="homeswier">
    <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a href="#">
        <img :src="item.image" alt=''>
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
  #homeswier{
    position: relative;
    width: 80%;
    left: 10%;
    height: 500px;
  }
</style>
