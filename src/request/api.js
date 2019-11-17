import request from '@/request/http.js'
import wx from "weixin-js-sdk";
export function fetchList(data) {
  return request({
    url: '/api/wechat/auth',
    method: 'get',
    params: data
  })
}
export function getList(data) {
  return request({
    url: '/api/wechat/profileSearch',
    method: 'get',
    params: data
  })
}

export function release(data) {
  return request({
    url: '/api/wechat/profileCreate',
    method: 'post',
    data
  })
}

export function imgUpload(data) {
  return request({
    url: '/api/wechat/img',
    method: 'post',
    data
  })
}
export function my(data) {
  return request({
    url: '/api/wechat/me',
    method: 'post',
    data
  })
}
export function detail(data) {
  return request({
    url: '/api/wechat/profileDetail?profile_id='+data,
    method: 'get',
  })
}
export function createOrder(data) {
  return request({
    url: '/api/wechat/createOrder',
    method: 'post',
    data:data
  })
}
export function getSlide() {
  return request({
    url: '/api/wechat/getSlides',
    method: 'get',
    data:{}
  })
}
export function getTagList() {
  return request({
    url: '/api/wechat/getTagList',
    method: 'get',
    data:{}
  })
}

export function getTicket(data) {
    return request({
        url: '/api/wechat/getTicket?url='+data.url,
        method: 'get',
        data:{}
    })
}
// 用户身份提交认证
export function userCard(data) {
  return request({
      url: '/api/wechat/identityAuth',
      method: 'post',
      data:data
  })
}
// 获取认证信息
export function approve(data) {
  return request({
      url: '/api/wechat/myAuthInfo',
      method: 'get',
      data:{}
  })
}
// 工作认证
export function workCard(data) {
  return request({
      url: '/api/wechat/workAuth',
      method: 'post',
      data:data
  })
}



// //  创建页面的config
// export const createdConfig = list => {
//   return new Promise((resolve, reject) => {
//       let url = window.location.href.split("#")[0];
//       api.getWxConfig({
//           url: url
//       })
//           .then(res => {
//               wx.config({
//                   debug: false,
//                   appId: res.appId,
//                   timestamp: res.timestamp,
//                   nonceStr: res.nonceStr,
//                   signature: res.signature,
//                   jsApiList: list
//               });
//               resolve(res);
//           })
//           .catch(err => {
//               reject(err);
//           });
//       wx.error(function(res) {
//           reject(res);
//           this.$toast(res.errMsg.toString());
//       });
//   });
// };
// // 创建订单
// export const createOrder = data => {
//   return new Promise((resolve, reject) => {
//       api.createdOrder(data)
//           .then(res => {
//               resolve(res);
//           })
//   });
// };

// // 根据订单获取预支付id，并发起支付
// export const payByOrderId = res => {
//   return new Promise((resolve, reject) => {
//       api.payOrder({
//           user_order_id: res.user_order_id,
//           pay_channel: 1010,
//           openid: store.getters.openid
//       })
//           .then(res => {
//               wx.ready(function() {
//                   wx.chooseWXPay({
//                       timestamp: res.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
//                       nonceStr: res.nonceStr, // 支付签名随机串，不长于 32 位
//                       package: res.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
//                       signType: res.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
//                       paySign: res.paySign, // 支付签名
//                       success: function(res) {
//                           resolve(res);
//                       }
//                   });
//               });
//           })

//   });
// };

// // 创建订单并支付
// export const payOrder = data => {
//   return new Promise((resolve, reject) => {
//       createOrder(data)
//           .then(orderRes => {
//               payByOrderId(orderRes)
//                   .then(res => {
//                       resolve(res);
//                   })
//                   .catch(err => {
//                       reject(err);
//                   });
//           })
//   });
// };
