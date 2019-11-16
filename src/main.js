import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/js/public640.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// console.log(moment().subtract(10, "days").format("YYYY-MM-DD"))
import VConsole from 'vconsole'
new VConsole()


if(sessionStorage.token){
    // 如果存在什么也不做，直接用token就行
    alert('缓存'+sessionStorage.token);
}else if(location.href.includes('token')){
    alert('返回111'+location.href);
    alert('返回TOKEN'+this.$route.query.token);
    alert('返回'+JSON.stringify(this.$route.query));
    sessionStorage.token = this.$route.query.token;
    alert('sessionStorage:' + JSON.stringify(sessionStorage));
}else{
    var en = escape('http://love.anheqiaobei.com/#/about');
    // var en = 'http://love.anheqiaobei.com';
    var url = 'http://api.love.anheqiaobei.com/api/wechat/auth?target_url='+en;
    alert('请求'+url);
     window.location.href=url;

}


// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from)
// })
