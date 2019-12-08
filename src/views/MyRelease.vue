<template>
  <div class="myRelease">
    <!-- <button @click="sub">支付</button> -->
    <ul>
        <li v-for="(item,i) in releaseList" :key="i">
            <img :src="item.self_img[0]?item.self_img[0]:''" alt="">
            <div>
                <p>{{item.nickname}}</p>
                <span>现居{{item.address_birth_name}}</span>
                <!-- 自定义标签，随意弄得 -->
                <span>{{item.age}}岁 | {{item.height}}cm <ab v-if="item.job">| {{item.job}}</ab></span>
                <a>发布时间：2019-11-29</a>
            </div>
            <span>{{item.profile_status_name}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
// import { createOrder } from "@/request/api.js";
import { myRelease } from "@/request/api.js";
// import wx from "weixin-js-sdk";
export default {
    name: "myRelease",
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
                openid: sessionStorage.openId,
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
        myRelease({}).then(res=>{
            this.releaseList=res.data;
        })
    }
};
</script>
<style lang="scss" scoped>
    .myRelease{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #f5f5f5;
        ul{
            width: 100%;
            box-sizing: border-box;
            padding: 0.2rem 0.25rem;
            li{
                width: 100%;
                height: 1.8rem;
                background: #fff;
                font-size: 0.2rem;
                margin-bottom: 0.15rem;
                border-radius: 0.1rem;
                overflow: hidden;
                display: flex;
                position: relative;
                img{
                    width: 1.8rem;
                    height: 1.8rem;
                    object-fit: cover;
                }
                div{
                    box-sizing: border-box;
                    padding: 0.15rem 0.2rem;
                    p{
                        font-size: 0.23rem;
                        margin-bottom: 0.1rem;
                    }
                    span{
                        display: block;
                        margin-top: 0.05rem;
                        color: #666;
                    }
                    a{
                        display: block;
                        padding-top: 0.2rem;
                        color: #999;
                    }
                }
                &>span{
                    display: block;
                    padding: 0 0.15rem;
                    height: 0.32rem;
                    border: 1px solid #2b4cfd;
                    color: #2b4cfd;
                    line-height: 0.32rem;
                    text-align: center;
                    font-size: 0.2rem;
                    border-radius: 0.16rem;
                    position: absolute;
                    top: 0.15rem;
                    right: 0.1rem;
                }
            }
        }
    }
</style>
