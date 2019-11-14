import { getTicket } from "@/request/api.js";
import wx from "weixin-js-sdk";
import { Toast } from "vant";

export default function WxShare(shareObj) {
    console.log(shareObj);
    return new Promise((resolve, reject) => {
        let url = encodeURIComponent(window.location.href.split("#")[0]);
        getTicket({
            url: url
        })
            .then(res => {

                alert('返回请求数据'+JSON.stringify(res));
                wx.config({
                    debug: false,
                    appId: res.data.appId,
                    timestamp: res.data.timestamp,
                    nonceStr: res.data.nonceStr,
                    signature: res.data.signature,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        // 'updateAppMessageShareData',
                        // 'updateTimelineShareData'
                    ]
                });
                let share_config = {
                    imgUrl: shareObj.imgUrl,
                    desc: shareObj.desc,
                    title: shareObj.title,
                    link: shareObj.link,
                    success: function() {
                        Toast("分享成功！");
                    },
                    cancel: function() {
                        Toast("已取消分享！");
                    }
                };
                wx.ready(function() {
                    wx.onMenuShareTimeline(share_config); //分享给好友
                    wx.onMenuShareAppMessage(share_config); //分享到朋友圈
                    wx.updateAppMessageShareData(share_config); //分享给手机QQ
                    wx.updateTimelineShareData(share_config); //分享给手机QQ
                });
                resolve(res);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
        wx.error(function(res) {
            console.log(res);
            reject(res);
            Toast(res.errMsg.toString());
        });
    });
}
