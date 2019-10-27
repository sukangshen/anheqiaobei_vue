<template>
  <div class="release">
    <div class="head">
      <van-swipe :autoplay="3000" indicator-color="#1989fa">
        <van-swipe-item>
          <div class='bg-img'>
            <img src="@/static/img/nv1.jpg" class='img'>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class='bg-img'>
           <img src="http://cdn.anheqiaobei.com/3d5a82b3fe59296717fbd7915685c108.jpeg" alt class="img" />
          </div>
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
      <ul>
        <li class="nickname">
          <img src="@/static/img/nv1.jpg" class="round_icon"  alt="">
          <span>小奶狗型</span>
          <p class="switch">已认证</p>
        </li>
        <li>
          <span>99年</span>
          <span>170cm</span>
          <span>50kg</span>
        </li>
        <li>
          <span><van-icon name="location-o" />河北石家庄</span>
          <span>现居北京</span>
        </li>
      </ul>
    </div>

    <div class="easy">
      <p class="tips"><span>个人介绍</span></p>
      <div>
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
        不知不觉，你已经离开我，不知不觉，我跟了这节奏
      </div>
    </div>
    <div class="easy">
      <p class="tips"><span>择偶标准</span></p>
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
    return {
      checked: true
    };
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
  padding: 0.2rem;
  box-sizing: border-box;
  margin: 0.2rem 0;
}
.easy > span {
  height: 0.6rem;
  line-height: 0.6rem;
  display: block;
  border-bottom: 1px solid #eee;
  color: #525252;
  font-size: .25rem;
}
.easy > div {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0;
  color: #888;
  font-size: .23rem;
  line-height: .35rem;
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
.easy > ul {
  line-height: .45rem;
}
.easy > ul > li:nth-child(2) > span, .easy > ul > li:nth-child(3) > span {
  color: #7e7e7e;
  &:after {
    content: "";
    margin-left: .15rem;
    padding-left: .15rem;
    border-left: 1px solid #d8d8d8;
    height: .26rem;
    display: inline-block;
    vertical-align: middle;
  }
}
.easy > ul > li:nth-child(2) > span:last-child,.easy > ul > li:nth-child(3) > span:last-child {
  &:after {
    border: none;
  }
}
.nickname {
  display: flex;
  align-items: center;
}
.nickname > span {
  flex: 8;
  color: #3b3b3b;
  padding-left: .1rem;
}
.round_icon{
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  overflow: hidden;
}
.switch {
  flex:2;
  color: #3b3b3b;
}
.tips {
  &:before {
    content: "";
    margin-left: .1rem;
    padding-left: .1rem;
    border-left: 2px solid #2b4cfd;
    height: .25rem;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: .02rem;
  }
}
.bg-img{
  position: relative;
  left: 0;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 4rem;
  background-size:contain;
  background-position:center;
  background-repeat: no-repeat;
}
.img{
  width: auto;
	height: auto;
  max-width:100%; 
  max-height:100%;
}
</style>
