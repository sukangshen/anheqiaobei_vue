<template>
    <div class="process">
        <p class="tit_p">常见问题</p>
        <p class="tit_c">猜你想问</p>
        <!-- <p class="tit_c">平台发布信息安全吗？</p>
        <div class="process_top">
            <span>平台会对用户进行身份认证，工作认证进行审核，确保用户平台的质量和真实性。</span>
        </div>
        <p class="tit_c">我的帖子发布了为什么不展示？</p>
        <div class="process_top">
            <span>平台先会对用户发布帖子进行审核，审核通过后平台会根据用户的发布时间进行一次展示，请耐心等待！</span>
        </div>
        <p class="tit_c">帖子发布后可以撤回吗？</p>
        <div class="process_top">
            <span>您可以联系平台客服进行相关操作。</span>
        </div>
        <p class="tit_c">发布帖子后太多人加我微信怎么办？</p>
        <div class="process_top">
            <span>您可以将平台的好友在微信分标签管理，日后慢慢进行沟通，不要因为人太多二烦恼！</span>
        </div>
        <p class="tit_c">如何联系客服？</p>
        <div class="process_top">
            <span>添加微信：123456</span>
        </div> -->
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="平台发布信息安全吗？" name="1">平台会对用户进行身份认证，工作认证进行审核，确保用户平台的质量和真实性。</van-collapse-item>
            <van-collapse-item title="我的帖子发布了为什么不展示？" name="2">平台先会对用户发布帖子进行审核，审核通过后平台会根据用户的发布时间进行一次展示，请耐心等待！</van-collapse-item>
            <van-collapse-item title="帖子发布后可以撤回吗？" name="3">您可以联系平台客服进行相关操作。</van-collapse-item>
            <van-collapse-item title="发布帖子后太多人加我微信怎么办？" name="4">您可以将平台的好友在微信分标签管理，日后慢慢进行沟通，不要因为人太多二烦恼！</van-collapse-item>
            <van-collapse-item title="如何联系客服？" name="5">添加微信：123456</van-collapse-item>
        </van-collapse>
    </div>
</template>
<script>
export default {
    name:'process',
    data(){
        return{
            activeName:''
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
    .process_top{
        width: 5.6rem;
        margin: 0.26rem auto 0;
        font-size: 0.22rem;
        background: #ffefef;
        box-sizing: border-box;
        padding: 0.2rem;
        border-radius: 0.1rem;
        line-height: 0.36rem;
        letter-spacing: 1px;
        a{
            font-size: 0.3rem;
            margin-right: 0.1rem;
        }
        span{
            color: #666
        }
    }
    .tit_p{
            text-align: center;
            margin: 0.4rem 0 0;
            font-size: 0.3rem;
            // font-weight: 550;
        }
    .tit_c{
        font-size: 0.24rem;
        box-sizing: border-box;
        padding: 0 0.25rem 0.3rem;;
        margin-top: 0.3rem;
        // font-weight: 550;
    }
</style>
