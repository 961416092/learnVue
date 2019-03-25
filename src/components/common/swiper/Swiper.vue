<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <!-- <slot name="indicator"></slot> -->
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{active: index === currentIndex-1}"
          :key="item"
          @click="itemclick(index)"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    // 轮播切换时间
    interval: {
      type: Number,
      default: 5000
    },
    // 动画时长
    animDuration: {
      type: Number,
      default: 500
    },
    // 指示器
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false // 是否正在滚动
    };
  },
  mounted: function() {
    // 操作DOM,在前后添加Slide
    setTimeout(() => {
      this.handleDom();
      // 开启定时器
      this.startTimer();
    }, 100);
  },
  components: {},
  methods: {
    /* 
    操作DOM,在DOM前后加上Slide 
    */
    handleDom() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector(".swiper");
      let slidesEls = swiperEl.getElementsByClassName("slide");

      // 2.保存个数
      this.slideCount = slidesEls.length;

      // 3.如果大一1个,在前后分别添加一个slide
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);

        // 指定的已有子节点之前插入新的子节点
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);

        // 获取物体宽度的数值
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      // 4.让swiper元素显示第一个
      this.setTransform(-this.totalWidth);
    },

    /* 
    设置滚动的位置
    */
    setTransform(position) {
      this.swiperStyle.transform = `translate(${position}px, 0)`;
      // this.swiperStyle["-webkit-transform"] = `translate3d(${position}px), 0, 0`;
      // this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },

    /*
    定时器操作
    */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        // 当前的index加一
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    /* 
    滚动到正确位置
    */
    scrollContent(currentPosition) {
      // 1.设置正在滚动
      this.scrolling = true;

      // 2.开始滚动
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(currentPosition);

      // 3.判断滚动的位置
      this.checkPosition();
    },

    /* 
    校验正确的位置
    */
    checkPosition() {
      window.setTimeout(() => {
        // 校验位置
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        // else if (this.currentIndex <= 0) {
        //   this.currentIndex = this.slideCount;
        //   this.setTransform(-this.currentIndex * this.totalWidth);
        // }

        // 结束移动,回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },

    /* 
    控制轮播图
    */
    changeItem: function(num) {
      // 1.移除定时器
      this.stopTimer();

      // 2.修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 3.添加定时器
      this.startTimer();
    },

    itemclick(index) {
      this.changeItem(index+1-this.currentIndex);
    }
  }
};
</script>

<style>
#hy-swiper {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
  height: 100%;
}

.indicator {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  bottom: 10px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
