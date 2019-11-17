<template>
  <div class="release">
    <div class="head" @click="goPreview">
      <van-swipe :autoplay="3000" indicator-color="#333">
        <van-swipe-item v-for="(item,i) in data.self_img" :key="i">
          <img :src="item" alt class="imgClass" />
        </van-swipe-item>
        <!-- <van-swipe-item>
          <img src="@/static/img/nv2.jpg" alt class="imgClass" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/static/img/nv3.jpg" alt class="imgClass" />
        </van-swipe-item>-->
      </van-swipe>
    </div>
    <van-image-preview v-model="preview" :images="images" @change="onChange">
      <template v-slot:index>{{index+1}}/{{images.length}}</template>
    </van-image-preview>
    <div class="brief">
      <p>
        <img :src="data.headimgurl" alt />
        {{data.nickname}}
      </p>
      <div>
        <p>{{data.birth}} | {{data.height}}cm | {{data.weight}}kg</p>
        <p>{{data.address_birth_name && data.address_birth_name.split('-')[0]}}{{data.address_birth_name && data.address_birth_name.split('-')[1]}} | 现居{{data.address_live_name && data.address_live_name.split('-')[0]}}{{data.address_live_name && data.address_live_name.split('-')[1]}}</p>
      </div>
    </div>
    <div class="easy">
      <span><a class="titBorder"></a>个人介绍：</span>
      <div>{{data.self_intro}}</div>
    </div>
    <div class="easy">
      <span><a class="titBorder"></a>择偶标准：</span>
      <div>{{data.friend_condition}}</div>
    </div>
    <div class="easy">
      <span><a class="titBorder"></a>家庭背景：</span>
      <div>{{data.family_info}}</div>
    </div>
    <div class="easy">
      <span><a class="titBorder"></a>个人标签：</span>
      <div>
        <van-tag style="background:#2b4cfd;margin-bottom:5px" size="medium" round v-for="(item, key) in data.tag_list" :key="key" type="primary">{{ item }}</van-tag>
      </div>
    </div>
    <div class="easy">
      <div class="button-group">
        <van-button round type="info" size="small">分享</van-button>
        <van-button
          round
          type="info"
          size="small"
          color="linear-gradient(to left, #4bb0ff, #6149f6)"
          @click="showPopup"
        >想认识</van-button>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
          <span>很想认识一下</span>
          <div ></div>
          <div v-for="(item,i) in data.wechat_img" :key="i" class="qr-code">
            <img :src="item" alt class="qr-code-img" />
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { detail } from "@/request/api.js";
export default {
  name: "detailed",
  data() {
    return {
      preview: false,
      index: 0,
      images: ["https://img.yzcdn.cn/2.jpg", "https://img.yzcdn.cn/2.jpg"],
      data: {},
      show: false,
      wechat_img: ["http://cdn.anheqiaobei.com/11"]
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    goPreview() {
      this.preview = true;
    },
    showPopup() {
      this.show = true;
    }
  },
  mounted() {
    detail(this.$route.query.id).then(res => {
      console.log(res.data);
      this.data = res.data;
      this.images = res.data.self_img;
    });
  }
};
</script>
<style lang='scss' scoped>
.head {
  width: 100%;
  height: 6rem;
  position: relative;
  border-bottom: 1px solid #efefef;
  .imgClass {
    width: 100%;
    height: 6rem;
    object-fit: contain;
  }
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.easy {
  font-size: 0.24rem;
  background: #fff;
  box-sizing: border-box;
  margin: 0.2rem 0;
}
.easy > span {
  display: block;
  // border-left: 3px solid #2b4cfd;
  font-size: 0.24rem;
  color: #333;
  // padding-left: 0.1rem;
  margin-left: 0.25rem;
  margin-bottom: 0.05rem;
  font-weight: 550;
}
.easy > div {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0.25rem;
  border-bottom: 1px solid #eee;
  line-height: 0.36rem;
  color: #666;
}
.easy > .button-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .van-button__text {
    font-size: 0.25rem;
    padding: 0 0.5rem;
  }
}
.qr-code {
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .qr-code-img {
    width: 100%;
    height: 100%;
  }
}
.brief {
  height: 1.6rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 0.25rem;
  margin-top: 0.2rem;
  & > p {
    font-size: 0.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    img {
      width: 0.6rem;
      height: 0.6rem;
      vertical-align: top;
      border-radius: 50%;
      margin-right: 0.1rem;
    }
    padding-bottom: 0.05rem;
  }
  div {
    font-size: 0.24rem;
    p {
      color: #999;
      padding-bottom: 0.05rem;
    }
  }
}
.van-tag--round {
  margin-left: 0.08rem;
}
.van-tag--default {
  background-color: #c3c1c1;
}
</style>
