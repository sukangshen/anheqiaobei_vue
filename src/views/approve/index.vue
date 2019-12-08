<template>
  <div class="approve">
      <ul>
          <li>
              <div class="left">
                  <img src="@/static/img/user.png" alt="" style="height:0.6rem;">
                  <span>实名认证</span>
              </div>
              <div class="right">
              <!-- 0待认证 1待审核 2已通过 3审核失败 -->
                  <span v-if="identity==0" @click="$router.push('/user')">待认证</span>
                  <span v-else-if="identity==1">待审核</span>
                  <span v-else-if="identity==2" @click="$router.push('/user')">已通过</span>
                  <span v-else @click="$router.push('/user')">审核失败</span>
                  <a v-if="identity==3">审核失败，重新认证</a>
              </div>
              
          </li>
          <li>
              <div class="left">
                  <img src="@/static/img/work.png" alt="">
                  <span>工作认证</span>
              </div>
              <div class="right">
                  <span v-if="work==0" @click="$router.push('/work')">待认证</span>
                  <span v-else-if="work==1">待审核</span>
                  <span v-else-if="work==2" @click="$router.push('/work')">已通过</span>
                  <span v-else @click="$router.push('/work')">审核失败</span>
                  <a v-if="work==2">工作有更新，重新认证</a>
                  <a v-if="work==3">审核失败，重新认证</a>
              </div>
              
          </li>
          <!-- <li>
              <div class="left">
                  <img src="@/static/img/school.png" alt="">
                  <span>学历认证</span>
              </div>
              <div class="right">
                  待认证
              </div>
          </li> -->
      </ul>
  </div>
</template>

<script>
import {approve}  from "@/request/api.js";
export default {
    data(){
        return {
            identity:{},
            work:{}
        }
    },
    created(){
        approve().then(res=>{
            if(res.status){
                this.identity=res.data.identity.status;
                this.work=res.data.work.status;
            }
        })
    }
}
</script>

<style lang='scss' scoped>
    .approve{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #f5f5f5;
        ul{
            width: 6rem;
            margin: 0.25rem auto;
            li{
                width: 6rem;
                height: 1.7rem;
                background: #fff;
                margin-bottom: 0.25rem;
                border-radius: 0.1rem;
                font-size: 0.2rem;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding:0 0.5rem;
                justify-content: space-between;
                position: relative;
                .left{
                    width: 0.8rem;
                    text-align: center;
                    img{
                        width: 0.6rem;
                        height: 0.5rem;
                        display: block;
                        margin: 0 auto 0.2rem;
                    }
                    span{
                        white-space: nowrap;
                    }
                }
                .right{
                    width: 2rem;
                    font-size: 0.24rem;
                    text-align: center;
                    color: #fff;
                    span{
                        width: 1.7rem;
                        display: block;
                        line-height: 0.54rem;
                        height: 100%;
                        background: #2b4cfd;
                        border-radius: 0.3rem;
                        margin: 0 auto;
                    }
                    a{
                        color: #2b4cfd;
                        font-size: 0.18rem;
                        white-space: nowrap;
                        padding-top: 0.05rem;
                    }
                }
                &>span{
                    position:absolute;
                    right: 0;
                    bottom: 0
                }
            }
        }
    }
</style>