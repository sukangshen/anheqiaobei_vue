(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2b81"],{"5a65":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"WechatPay"},[t("button",{on:{click:e.sub}},[e._v("支付")])])},i=[],d=t("fd03"),o=(t("18a0"),{name:"WechatPay",data:function(){return{releaseList:[]}},methods:{onBridgeReady:function(e){var n=e;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:n.appId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.sign},(function(e){"get_brand_wcpay_request:ok"==e.err_msg&&alert("支付成功！")}))},sub:function(){var e=this;Object(d["c"])({openid:sessionStorage.openId,total_fee:"1",goods_name:"爱情"}).then((function(n){alert(JSON.stringify(n));var t=n.data;"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady)):e.onBridgeReady(t)}))}},mounted:function(){var e=this;document.body.style.background="#f5f5f5",Object(d["WechatPay"])({}).then((function(n){e.releaseList=n.data}))}}),c=o,r=t("2877"),s=Object(r["a"])(c,a,i,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0d2b81.b6820d75.js.map