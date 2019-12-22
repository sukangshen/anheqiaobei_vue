<template>
  <div class="about">
  <div class="topBg">
    <div class="swiper">
        <van-swipe :autoplay="2000" loop indicator-color="#1989fa !important">
        <van-swipe-item v-for="(item,i) in slides" :key="i"><img :src="item.img_url" alt="" @click="goTargetUrl(item.target)"></van-swipe-item>
      </van-swipe>
    </div>
 </div>
 <div class="topList">
   <ul>
     <li @click="$router.push('/introduce/system')">
       <img src="@/static/img/home_top1.png" alt="">
       <span>认证体系</span>
     </li>
     <li @click="$router.push('/introduce/process')">
       <img src="@/static/img/home_top2.png" alt="">
       <span>发布流程</span>
     </li>
     <li @click="$router.push('/introduce/relevant')">
       <img src="@/static/img/home_top3.png" alt="">
       <span>关于我们</span>
     </li>
     <li @click="$router.push('/introduce/question')">
       <img src="@/static/img/home_top4.png" alt="">
       <span>常见问题</span>
     </li>
   </ul>
 </div>
 <div style="width:100%;height:0.1rem;background:#eee"></div>
    <div class="top">
      <div>
        <span :class="active==1?'activeClass':''" @click="tab(1)">最新</span>
        <span :class="active==2?'activeClass':''" @click="tab(2)">最热</span>
        <a></a>
      </div>
    </div>
    <div class="cont" @touchend="load">
      <ul>
        <li v-for="(item,i) in list" :key="i" @click="goDetail(item.profile_id)">
          <img
            :src="item['self_img']?item['self_img'][0]:''"
            alt
          />
          <div class="detail">
            <img :src="item.headimgurl" alt />
            <span style="float:left">{{item.nickname}}</span>
            <span style="float:right">{{item.age}}岁/{{item.address_live_name.split('-')[0]}}</span>
          </div>
        </li>
      </ul>
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
import { fetchList, getList ,getSlide} from "@/request/api.js";
import { Swipe, SwipeItem } from "vant";
export default {
    name: "about",
    data() {
        return {
            loading: false,
            active: 1,
            selected: "/home",
            list: [],
            allLoaded: false,
            msg: "上拉加载更多",
            page: 1,
            msgBol: true,
            slides:[]
        };
    },
    watch: {
        selected(newVal) {
            this.$router.push(newVal);
        }
    },
    methods: {
        goTargetUrl(url){
            location.href=url;
        },
        load() {
            if (!this.msgBol) {
                return;
            }
            this.page++;
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
            //滚动条到底部的条件
            if (scrollTop + windowHeight >= scrollHeight) {
                this.getList();
            }
        },
        goDetail(id) {
            this.$router.push({ path: "/detailed", query: { id: id } });
        },
        tab(i) {
            this.active = i;
            if (i == 1) {
                document.querySelector(".top a").style.left = "0.06rem";
            } else {
                document.querySelector(".top a").style.left = "0.95rem";
            }
        },
        getList() {
            getList({ limit: "20", page: this.page }).then(res => {
                if (res.status) {
                    var arr = this.list.concat(res.data.data);
                    this.list = arr;
                    if (this.list.length == res.data.total) {
                        this.msg = "暂无更多数据";
                        this.msgBol = false;
                    }
                }
            });
        }
    },
    mounted() {
        this.getList();
        getSlide().then(res=>{
            console.log(res.data);
            this.slides=res.data;
        })
    }
};
</script>
<style lang='scss' scoped>
.about {
  width: 100%;
  .topBg{
    width: 100%;
    height: 2.9rem;
    background: url(../static/img/home_bg.png) no-repeat 0 0/100% 3rem;
  .swiper{
    height: 2.3rem;
    position: relative;
    padding-top: 0.6rem;
    .van-swipe{
      width: 5.8rem;
      margin: 0.1rem auto 0;
      border-radius: 0.1rem;
      overflow: hidden;
      height: 2.3rem;
      .van-swipe-item{
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
    }
    .topList{
      width: 100%;
      margin-top: 0.3rem;
      margin-bottom: 0.2rem;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          width: 25%;
          text-align: center;
          font-size: 0.2rem;
          img{
            width: 0.7rem;
            margin-bottom: 0.08rem;
          }
          span{
            display: block;
          }
        }
      }
    }
}
.top {
  font-size: 0.28rem;
  margin: 0.2rem .17rem 0.15rem;
}
.top > div {
  width: 2rem;
  position: relative;
  height: 0.45rem;
  margin-left: 0.15rem;
  a {
    display: block;
    position: absolute;
    width: 0.28rem;
    height: 0.03rem;
    background: #2b4cfd;
    bottom: 0;
    left: 0.06rem;
    border-radius: 0.08rem;
  }
}
.top span {
  margin-right: 0.35rem;
  padding-bottom: 0.08rem;
  color: #999;
    font-size:.22rem;
}
.top .activeClass {
  color: #333;
    font-size:.26rem;
}
.cont {
  // margin-bottom: 1rem;
  width: 5.8rem;
  margin: 0 auto 1rem;
  p {
    font-size: 0.2rem;
    text-align: center;
    margin: 0.1rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 2.8rem;
      height: 4.38rem;
      overflow: hidden;
      border-radius: .1rem;
      background: #fff;
      box-shadow: 0px 0px 5px #ccc;
      margin-bottom: 10px;
       img {
          width: 100%;
          height: 3.8rem;
          object-fit: cover;
          vertical-align: middle;
        }
    }
  }
}
.cont ul > li > .detail {
  width: 100%;
  height: 0.56rem;
  line-height: 0.56rem;
  font-size: 0.22rem;
  box-sizing: border-box;
  padding: 0 0.05rem;
}
.cont ul > li > div > span:nth-of-type(1) {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 1.2rem;
}
.cont ul > li > div > img {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  border-radius: 50%;
  margin-right: 0.05rem;
  vertical-align: top;
  margin-top: 0.08rem;
}
</style>
