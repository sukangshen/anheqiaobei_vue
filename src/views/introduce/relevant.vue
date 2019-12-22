<template>
    <div class="question">
        <p class="tit_p">关于我们</p>
        <div class="question_top">
            <a>安和桥北</a>
            <span>团队成员来自于一线互联网开发工程师，通过业余时间打造一个公益交友平台，服务器费用目前有个人承担，目前不考虑商业化，如果后期维护成本过高，再考虑适当的收费，感谢有你，我在安和桥北等你</span>
        </div>
        <p class="tit_p">安河桥北的故事</p>
        <div class="question_top">
            <a>安和桥北</a>
            <span>团队成员来自于一线互联网开发工程师，通过业余时间打造一个公益交友平台，服务器费用目前有个人承担，目前不考虑商业化，如果后期维护成本过高，再考虑适当的收费，感谢有你，我在安和桥北等你</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'question',
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
    .question_top{
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
