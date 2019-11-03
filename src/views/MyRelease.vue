<template>
  <div class="myRelease">
    <button @click="sub">123</button>
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
  methods: {
     onBridgeReady(params) {
            const pay_params = params;
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": pay_params.appId,  //公众号名称，由商户传入     
                    "timeStamp": pay_params.timeStamp,  //时间戳，自1970年以来的秒数     
                    "nonceStr": pay_params.nonceStr,  //随机串     
                    "package": pay_params.package,     
                    "signType": pay_params.signType,  //微信签名方式：     
                    "paySign": pay_params.sign  //微信签名 
                },
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                    alert('支付成功！');
                } 
            }); 
        },
        sub(){
createOrder({openid:sessionStorage.openId,total_fee:'1',goods_name:'爱情'}).then(res=>{
        alert(JSON.stringify(res));
        const pay_params = res.data;
                    if (typeof WeixinJSBridge == "undefined"){
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                        }else{
                        this.onBridgeReady(pay_params);
                    }
              // wx.config({
              //       debug: false,
              //       appId: res.data.appId,
              //       timestamp: res.data.timestamp,
              //       nonceStr: res.data.nonceStr,
              //       signature: res.data.sign,
              //       jsApiList: ["chooseWXPay"]
              //   });
      })
        }
      
  },
  mounted() {
      
  }
};
</script>
<style lang="scss" scoped>

</style>
