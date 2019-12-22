<template>
  <div class="home">
    <router-view />
    <van-tabbar fixed v-model="active" style="background:#fafafa" v-show="btmBol">
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
// import { fetchList } from "@/request/api.js";
export default {
    name: "home",
    data() {
        return {
            btmBol:true,
            active: "",
            tabbars: [
                {
                    name: "/about",
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
    watch:{
        $route(to){
            if(to.path=='/about'){
                this.active=0;
            }else if(to.path=='/release'){
                this.active=1;
            }else if(to.path=='/information'){
                this.active=2;
            }
        }
    },
    methods: {
        tab(i,path){
            this.active=i;
            sessionStorage.active=i;
            this.$router.push(path);
            scrollTo(0,0);
        }
    },
    mounted() {
        document.body.style.background='#fff';
        if(location.href.includes('open_id')){
            sessionStorage.openId=this.$route.query.open_id;
        }
        if(sessionStorage.active){
            this.active=Number(sessionStorage.active);
        }else{
            this.active=0;
        }
        window.addEventListener("popstate", function(e) {
            if(this.$route.path=='/about'){
                this.active=0;
            }else if(this.$route.path=='/release'){
                this.active=1;
            }else{
                this.active=2;
            }
        }, false);
        if(sessionStorage.token){
            // 如果存在什么也不做，直接用token就行
        // alert('缓存'+sessionStorage.token);
        }else if(location.href.includes('token')){
        // alert('返回TOKEN'+this.$route.query.token);
        // alert('返回'+JSON.stringify(this.$route.query));
            sessionStorage.token = this.$route.query.token;
        // alert('sessionStorage:' + JSON.stringify(sessionStorage));
        }else{
            var en = escape('http://love.anheqiaobei.com/#/about');
            // var en = 'http://love.anheqiaobei.com';
            var url = 'http://api.love.anheqiaobei.com/api/wechat/auth?target_url='+en;
            // alert('请求'+url);
            // window.location.href=url;
        // alert('继续11');
        }
        // alert('继续22');
        var that = this;
        let win = window.innerHeight;
        window.addEventListener(
            "resize",
            function() {
                if (win - window.innerHeight>140) {
                    that.btmBol = false;
                    win = window.innerHeight;
                } else {
                    that.btmBol = true;
                    win = window.innerHeight;
                }
                scrollTo(0,0);
            },
            false
        );
        // document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        //   WeixinJSBridge.call('hideToolbar');
        //   WeixinJSBridge.call('hideOptionMenu');
        // });
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
