<template>
  <div class="release">
    <div class="head"  @click="goPreview">
      <van-swipe :autoplay="3000" indicator-color="#333">
        <van-swipe-item>
          <img src="@/static/img/nv1.jpg" alt class="imgClass" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/static/img/nv2.jpg" alt class="imgClass" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/static/img/nv3.jpg" alt class="imgClass" />
        </van-swipe-item>
      </van-swipe>
    </div>
<van-image-preview
  v-model="preview"
  :images="images"
  @change="onChange">
  <template v-slot:index>{{index+1}}/{{images.length}}</template>
</van-image-preview>
<div class="brief">
  <p><img src="https://img.yzcdn.cn/2.jpg" alt="">爱上猴神大叔</p>
  <div>
    <p>99年 | 167cm | 45kg</p>
    <p>河北石家庄 | 现居北京</p>
  </div>
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
import { detail} from "@/request/api.js";
export default {
  name: "detailed",
  data() {
    return {
      preview: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    goPreview(){
      this.preview=true;
    }
  },
  mounted() {
    alert(localStorage.token)
    detail(1).then(res=>{
      console.log(res);
    })
  }
};
</script>
<style lang='scss' scoped>
.head {
  width: 100%;
  height: 6rem;
  position: relative;
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
  border-left: 3px solid #2b4cfd;
  font-size: 0.24rem;
  color: #333;
  padding-left:0.1rem; 
  margin-left: 0.25rem;
  margin-bottom: 0.05rem;
}
.easy > div {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0.25rem;
  border-bottom: 1px solid #eee;
  line-height: 0.36rem;
  color: #666;
}
.brief{
  height: 1.5rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 0.25rem;
  margin-top: 0.2rem;
  &>p{
    font-size: 0.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    img{
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: top;
      margin-top: 0.05rem;
      border-radius: 50%;
      margin-right: 0.1rem;
    }
    padding-bottom: 0.05rem;
  }
  div{
    font-size: 0.24rem;
    p{
      color: #999;
      padding-bottom: 0.05rem;
    }
  }
}
</style>
