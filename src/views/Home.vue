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
      selected: "/home",
      currIndex: 0,
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
  watch: {
    active(newVal, oldVal) {
      // this.$router.push(newVal);
    }
  },
  methods: {
    tab(i,path){
      this.currIndex = i;
      this.$router.push(path);
    }
  },
  mounted() {
    this.active=0;
    this.selected = this.$route.path;
    // fetchList({'target_url':'https://www.baidu.com/'}).then(res=>{
    //   console.log(res)
    // })
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
