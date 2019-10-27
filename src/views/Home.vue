<template>
  <div class="home">
    <router-view />
    <van-tabbar fixed	 v-model="active" style="background:#fafafa">
      <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)">
      <span :class="active==index?'active':''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { fetchList } from "@/request/api.js";
export default {
  name: "home",
  data() {
    return {
      active: "",
      tabbars: [
        {
          name: "/home",
          title: "发现",
          normal: require("@/static/img/home.png"),
          active: require("@/static/img/home_active.png"),
        },
        {
          name: "/release",
          title: "发布",
          normal: require("@/static/img/release.png"),
          active: require("@/static/img/release_active.png"),
        },
        {
          name: "/information",
          title: "我的",
          normal: require("@/static/img/my.png"),
          active: require("@/static/img/my_active.png"),
        }
      ]
    };
  },
  methods: {
    tab(i,path){
      this.active=i;
      sessionStorage.active=i;
      this.$router.push(path);
    }
  },
  mounted() {
    alert(location.href);
    if(sessionStorage.active){
      this.active=Number(sessionStorage.active);
    }else{
      this.active=0;
    }
    if(location.href.includes('token')){
      sessionStorage.token=this.$route.query.token;
    }else{
      location.href='http://api.love.anheqiaobei.com/api/wechat/auth?target_url=http://love.anheqiaobei.com/#/home';
    }
  }
};
</script>
<style  scoped>
.home {
  width: 100%;
}
.van-tabbar-item__icon img {
  width: 0.35rem;
  height: 0.35rem;
}

.van-tabbar-item--active {
  color: #e10f02;
}
.active{
  color: #2b4cfd
}
</style>
