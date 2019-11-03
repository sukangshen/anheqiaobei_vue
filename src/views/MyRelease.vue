<template>
  <div class="myRelease">
    123
  </div>
</template>

<script>
import {createOrder} from "@/request/api.js";
import wx from "weixin-js-sdk";
export default {
  name: "myRelease",
  data() {
    return {
    };
  },
  methods: {},
  mounted() {
      createOrder({openid:sessionStorage.openId,total_fee:'1',goods_name:'爱情'}).then(res=>{
        alert(JSON.stringify(res));
        wx.config({
          debug: false,
          appId: res.data.appId,
          timestamp: res.data.timestamp,
          nonceStr: res.data.nonceStr,
          signature: res.data.signature,
          jsApiList: ["chooseWXPay"]
      });
      })
  }
};
</script>
<style lang="scss" scoped>

</style>
