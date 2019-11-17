<template>
  <div class="work">
      <div class="workTop">
          <p>工作认证</p>
          <span>已经汇聚BAT、华为、平安科技、中国移动等名企数十万用户</span>
      </div>
      <ul>
          <li @click="$router.push('workDetail')">
              <span>支付宝社保截图</span>
          </li>
          <li @click="$router.push('workDetail')">
              <span>钉钉或企业微信认证名片</span>
          </li>
          <li @click="$router.push('workDetail')">
              <span>工牌/在职证明/工作合同</span>
          </li>
          <li @click="$router.push('workDetail')">
              <span>在校学生</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        document.body.style.background='#fff';
    }
}
</script>

<style lang="scss" scoped>
.work{
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.25rem;
    font-size: 0.2rem;
    .workTop{
        p{
            font-size: 0.26rem;
            height: 0.8rem;
            line-height: 0.8rem;
            margin-top: 0.1rem;
            color: #333;
        }
        span{
            font-size: 0.23rem;
            color: #666;
        }
    }
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.3rem;
        li{
            width: 2.85rem;
            height: 1.8rem;
            border: 1px solid #2b4cfd;
            margin-bottom: 0.25rem;
            border-radius: 0.2rem;
            font-size: 0.26rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: 0 0.4rem;
            text-align: center;
            color: #2b4cfd
        }
    }
}
    
</style>