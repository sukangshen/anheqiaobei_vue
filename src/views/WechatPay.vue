<template>
  <div class="WechatPay">
    <button @click="sub">支付</button>
  </div>
</template>

<script>
import { createOrder } from "@/request/api.js";
import { WechatPay } from "@/request/api.js";
import wx from "weixin-js-sdk";
export default {
    name: "WechatPay",
    data() {
        return {
            releaseList:[]
        };
    },
    methods: {
        // 调取后台获取支付信息
        onBridgeReady(params) {
            const pay_params = params;
            WeixinJSBridge.invoke(
                "getBrandWCPayRequest",
                {
                    appId: pay_params.appId, //公众号名称，由商户传入
                    timeStamp: pay_params.timeStamp, //时间戳，自1970年以来的秒数
                    nonceStr: pay_params.nonceStr, //随机串
                    package: pay_params.package,
                    signType: pay_params.signType, //微信签名方式：
                    paySign: pay_params.sign //微信签名
                },
                function(res) {
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        alert("支付成功！");
                    }
                }
            );
        },
        // 支付
        sub() {
            createOrder({
                openid: ocxrjwBGMmIv_RmNx9DWiQW_RZ20,
                total_fee: "1",
                goods_name: "爱情"
            }).then(res => {
                alert(JSON.stringify(res));
                const pay_params = res.data;
                if (typeof WeixinJSBridge == "undefined") {
                    if (document.addEventListener) {
                        document.addEventListener(
                            "WeixinJSBridgeReady",
                            this.onBridgeReady,
                            false
                        );
                    } else if (document.attachEvent) {
                        document.attachEvent("WeixinJSBridgeReady", this.onBridgeReady);
                        document.attachEvent("onWeixinJSBridgeReady", this.onBridgeReady);
                    }
                } else {
                    this.onBridgeReady(pay_params);
                }
            });
        }
    },
    mounted() {
        document.body.style.background='#f5f5f5';
        WechatPay({}).then(res=>{
            this.releaseList=res.data;
        })
    }
};
</script>
