import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/js/public640.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
import VConsole from 'vconsole'
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// console.log(moment().subtract(10, "days").format("YYYY-MM-DD"))

// new VConsole()

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from)
// })
