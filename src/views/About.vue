<template>
  <div class="about">
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
            :src="item['self_img']?item['self_img'][0]:'http://img4.imgtn.bdimg.com/it/u=1212738062,1791075344&fm=26&gp=0.jpg'"
            alt
          />
          <div>
            <img :src="item.headimgurl" alt />
            <span style="float:left">善良的</span>
            <span style="float:right">{{item.age}}岁/{{item.address_live_name.split('-')[0]}}</span>
          </div>
        </li>
      </ul>
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
import { fetchList, getList } from "@/request/api.js";
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
      page:1,
      msgBol:true
    };
  },
  watch: {
    selected(newVal) {
      this.$router.push(newVal);
    }
  },
  methods: {
    load() {
      if(!this.msgBol){
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
        this.getList()
      }
    },
    goDetail(id) {
      this.$router.push({ path: "/detailed", query: { id: id } });
    },
    tab(i) {
      this.active = i;
      if (i == 1) {
        document.querySelector(".top a").style.left = "0.2rem";
      } else {
        document.querySelector(".top a").style.left = "0.94rem";
      }
    },
    getList(){
      getList({ limit: "20",page:this.page}).then(res => {
        if(res.status){
          var arr=this.list.concat(res.data.data);
          this.list=arr;
          if(this.list.length==res.data.total){
            this.msg='暂无更多数据';
            this.msgBol=false;
          }
        }
    });
    }
  },
  mounted() {
    this.getList()
  }
};
</script>
<style lang='scss' scoped>
.about {
  width: 100%;
  /* padding: 0 0.25rem; */
  /* box-sizing: border-box; */
}
.top {
  font-size: 0.28rem;
  margin: 0.2rem 0 0.15rem;
  text-align: center;
}
.top > div {
  width: 1.5rem;
  margin: 0 auto;
  position: relative;
  height: 0.45rem;
  a {
    display: block;
    position: absolute;
    width: 0.2rem;
    height: 0.05rem;
    background: #2b4cfd;
    bottom: 0;
    left: 0.2rem;
  }
}
.top span {
  margin-right: 0.15rem;
  padding-bottom: 0.08rem;
  color: #999;
}
.top .activeClass {
  color: #333;
}
.cont {
  margin-bottom: 1rem;
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
      width: 3.19rem;
      height: 4.3rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 3.8rem;
        object-fit: cover;
        vertical-align: middle;
      }
    }
  }
}

.cont ul > li > div {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.22rem;
  box-sizing: border-box;
  padding: 0 0.05rem;
}
.cont ul > li > div > span:nth-of-type(1) {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 1rem;
}
.cont ul > li > div > img {
  width: 0.36rem;
  height: 0.36rem;
  float: left;
  border-radius: 50%;
  margin-right: 0.07rem;
  vertical-align: top;
  margin-top: 0.05rem;
}
</style>
