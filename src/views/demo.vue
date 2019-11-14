<template>
    <div class="demo">
        <button @click="share">分享</button>
    </div>
</template>
<script>
import WxShare from "@/tools/wechatShare.js";
// import wx from "weixin-js-sdk";
export default {
    methods: {
        share() {
            WxShare({
                desc:"123213",
                title:"1232"
            }).then(()=>{
                console.log(1)
            }).catch(()=>{
                console.log(2)
            })
        }
    }
}
</script>
