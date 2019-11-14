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
                desc:"安和桥北",
                title:"安和桥北",
                imgUrl:'http://cdn.anheqiaobei.com/c635ee9b4fdad4cb333aba5c7279a046.jpeg',
                link:window.location.href
            }).then(()=>{
                console.log(1)
            }).catch((err)=>{
                console.log('----'+err)
            })
        }
    }
}
</script>
