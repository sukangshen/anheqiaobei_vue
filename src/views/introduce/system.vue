<template>
    <div class="system">
        <div class="system_top">
            <a>安和桥北</a>
            <span>是面向于一线城市高素质人群提供的免费交友平台，颠覆传统的会员机制交友，为提高平台的用户质量，所有用户必须进行实名认证、工作认证，共同创造高质量交友平台</span>
        </div>
        <div class="system_content">
            <p>认证步骤</p>
            <span>步骤一：认证身份</span>
            <img src="@/static/img/userApprove.png" alt="">
            <span>步骤二：工作认证</span>
            <img src="@/static/img/workApprove.png" alt="">
        </div>
        <div class="system_btm">
            <p>上传资料完成后，工作人员会24小时内进行</p>
            <p>个人资料审核，请耐心等待。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'system',
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
    .system_top{
        width: 5.6rem;
        margin: 0.8rem auto 0;
        font-size: 0.22rem;
        background: #ffefef;
        box-sizing: border-box;
        padding: 0.2rem;
        border-radius: 0.1rem;
        line-height: 0.4rem;
        letter-spacing: 1px;
        a{
            font-size: 0.3rem;
            margin-right: 0.1rem;
        }
        span{
            color: #666
        }
    }
    .system_content{
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.25rem;
        font-size: 0.24rem;
        p{
            font-size: 0.26rem;
            text-align: center;
            margin:0.5rem 0 0.05rem;
        }
        span{
            font-size: 0.24rem;
            display: inline-block;
            padding-bottom: 0.3rem;
        }
        img{
            width: 90%;
            display: block;
            margin: 0 auto 0.3rem;
        }
    }
    .system_btm{
        font-size:0.18rem;
        text-align: center;
        margin: 0.5rem 0;
        p{
            color: #999;
        }
    }
</style>
