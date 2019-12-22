<template>
    <div class="process">
        <p class="tit_p">发布流程</p>
        <div class="process_top">
            <a>安和桥北</a>
            <span>平台用户认证资料审核通过后，可以去往发布页面发布自己的交友帖子</span>
        </div>
        <p class="tit_p">发布流程</p>
        <p class="tit_c">步骤一：发布信息填写</p>
        <div class="process_top">
            <span>发布人确保自己发布信息的真实性，如果发现涉及其他违规行为，平台会将个人身份信息纳入国家征信信息系统，影响个人信誉。</span>
        </div>
        <p class="tit_c">步骤二：我的发布列表</p>
        <div class="process_top">
            <span>发布成功后进入 我的-我的发布，即可看到我发布的帖子，发布后平台会根据发布时间先后一次展示</span>
        </div>
        <p class="tit_c">步骤三：平台展示</p>
        <div class="process_top">
            <span>上传资料完成后，工作人员会24小时内进行个人资料审核，审核完成后，平台会在首页进行推荐展示。</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'process',
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
        }
    .tit_c{
        font-size: 0.24rem;
        box-sizing: border-box;
        padding: 0 0.4rem;
        margin-top: 0.3rem; 
    }
</style>
