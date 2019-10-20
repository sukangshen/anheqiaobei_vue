<template>
  <div class="release">
    <div class="head">
      <van-swipe :autoplay="3000" indicator-color="#1989fa">
        <van-swipe-item>
          <img src="@/static/img/nv1.jpg" alt class="imgClass" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/static/img/nv1.jpg" alt class="imgClass" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/static/img/nv1.jpg" alt class="imgClass" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/static/img/nv1.jpg" alt class="imgClass" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="easy">
      <span>个人介绍：</span>
      <div>
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
      </div>
    </div>
    <div class="easy">
      <span>择偶标准：</span>
      <div>
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailed",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    document.body.style.background = "#fafafa";
  }
};
</script>
<style lang='scss' scoped>
.head {
  width: 100%;
  height: 4rem;
  position: relative;
  .imgClass {
    width: 100%;
    height: 4rem;
  }
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.easy {
  font-size: 0.26rem;
  background: #fff;
  padding: 0 0.25rem;
  box-sizing: border-box;
  margin: 0.2rem 0;
}
.easy > span {
  height: 0.6rem;
  line-height: 0.6rem;
  display: block;
  border-bottom: 1px solid #eee;
  font-size: 0.22rem;
  color: #999;
}
.easy > div {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0;
}
.basic {
  position: absolute;
  font-size: 0.26rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.26rem;
  background: #fff;
  height: 1.1rem;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
}
.basic > p {
  color: #fff;
}
.basic > p:nth-child(1) {
  margin: 0.15rem 0 0.05rem;
}
</style>
