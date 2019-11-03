<template>
  <div class="information">
    <div class="portrait"></div>
    <div class="content">
      <div>
        <img :src="headimgurl" alt="">
        <span>{{nickName}}</span>
      </div>
      <ul class="list">
        <li style="border-top:1px solid #eee" @click="$router.push('/myRelease')">
          <span>我的发布</span>
          <img src="@/assets/right.png" alt />
        </li>
        <li>
          <span>关于我们</span>
          <img src="@/assets/right.png" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { my} from "@/request/api.js";
export default {
  name: "information",
  data() {
    return {
      nickName:'',
      headimgurl:''
    };
  },
  methods: {},
  mounted() {
    my({}).then(res=>{
      alert(JSON.stringify(res));
      this.nickName=res.data.data.nickname;
      this.headimgurl=res.data.data.headimgurl
    })
  }
};
</script>
<style lang="scss" scoped>
.information {
  width: 100%;
  .content {
    width: 100%;
    padding: 0 0.25rem;
    box-sizing: border-box;
    border-radius: 0.5rem 0.5rem 0 0;
    position: relative;
    bottom: 0.5rem;
    background: #fff;
    padding-top: 1.5rem;
    div {
      width: 100%;
      height: 1.2rem;
      position: absolute;
      left: 0;
      top: -0.6rem;
      z-index: 5;
      overflow: hidden;
      img{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        box-sizing: border-box;
        border: 3px solid #FFF;
        float: left;
        margin: 0 0.16rem 0 0.5rem
      }
      span{
        float: left;
        font-size: 0.28rem;
        color: #fff;
        padding-top: 0.13rem
      }
    }
    .list {
      font-size: 0.3rem;
    }
    li {
      clear: both;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      padding:0 0.3rem 0 0.25rem;
      span {
        float: left;
      }
      img {
        width: 0.36rem;
        height: 0.36rem;
        float: right;
        vertical-align: top;
        margin-top: 0.22rem;
      }
    }
  }
  .portrait {
    width: 100%;
    height: 2.5rem;
    background: #2b4cfd;
    position: relative;
  }
}
</style>
