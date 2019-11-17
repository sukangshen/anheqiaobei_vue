<template>
  <div class="user">
      <div class="userMsg">
          <p>为了保护平台用户的真实可靠性，需要您填写自身的身份信息！</p>
          <div>
              <img src="@/static/img/userWhite.png" alt="">
              <p>实名认证</p>
          </div>
      </div>
      <div class="userForm">
          <div>
              <span>姓名:</span>
              <input type="text" placeholder="请填写您的真实姓名" v-model="user_name">
          </div>
          <div>
              <span>身份证号:</span>
              <input type="text" placeholder="请填写您的身份证号" v-model="id_number">
          </div>
      </div>
      <div style="width:100%;height:0.18rem;background:#f0f0f0"></div>
      <div class="upload">
          <p>上传身份证件</p>
          <div class="card">
              <div>
                  <img src="@/static/img/jia.png" alt="" class="addImg">
                  <img :src="img_src1" alt="" class="loadImg">
                  <van-uploader :after-read="afterRead" style="position: absolute;top: 0;left: 0;z-index:9"/>
              </div>
              <div>
                  <img src="@/static/img/jia.png" alt="" class="addImg">
                  <img :src="img_src2" alt="" class="loadImg">
                  <van-uploader :after-read="afterRead1" style="position: absolute;top: 0;left: 0;z-index:9"/>
              </div>
          </div>
          <div class="cardTxt">
              <p>身份证正面</p>
              <p>身份证反面</p>
          </div>
      </div>
      <div class="sub" @click="submit">
          确认提交
      </div>
  </div>
</template>

<script>
import { imgUpload ,userCard} from "@/request/api.js";
import { Toast } from "vant";
export default {
    data(){
        return{
            id_number:"",
            user_name:'',
            img_src1:'',
            img_src2:'',
            img1:'',
            img2:''
        }
    },
    methods:{
        afterRead(file) {
            console.log(file)
            this.img_src1=file.content;
            var formData = new FormData();
            formData.append("image", file.file);
            imgUpload(formData).then(res => {
                console.log(res.data.img_url);
                this.img1=res.data.img_url;
            });
        },
        afterRead1(file) {
            this.img_src2=file.content;
            var formData = new FormData();
            formData.append("image", file.file);
            imgUpload(formData).then(res => {
                this.img2=res.data.img_url;
            });
        },
        submit(){
            if(this.user_name==''){
                Toast('请填写您的真实姓名');
                return;
            }
            if(this.id_number==''){
                Toast('请填写您的身份证号');
                return;
            }
            if(this.img1==''||this.img2==''){
                Toast('请上传您的身份证正反面');
                return;
            }
            userCard({
                user_name:this.user_name,
                id_number:this.id_number,
                image_front:this.img1,
                image_back:this.img2
            }).then(res=>{
                Toast('提交成功，请耐心等待审核');
                setTimeout(()=>{
                    this.$router.go(-1);
                },1000)
            })
        }
    },
    mounted(){
        document.body.style.background='#fff';
    }
}
</script>

<style lang='scss' scoped>
    .userMsg{
        width: 6rem;
        height: 2rem;
        background: #2b4cfd;
        margin: 0.25rem auto;
        border-radius: 0.15rem;
        font-size: 0.2rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 0.25rem;
        &>p{
            width: 4rem;
            color: #fff;
            margin-top: 0.4rem;
        }
        div{
            margin-top: 0.45rem;
            width: 1rem;
            text-align: center;
            img{
                width: 0.68rem;
                height: 0.7rem;
                margin: 0 auto 0.1rem;
            }
            p{
                color: #fff;
            }
        }
    }
    .userForm{
        font-size: 0.22rem;
        box-sizing: border-box;
        padding: 0 0.25rem;
        div{
            height: 0.6rem;
            line-height: 0.6rem;
            display: flex;
            margin-bottom: 0.1rem;
            span{
                margin-right:0.2rem;
            }
            input{
                flex: 1;
                &::placeholder{
                    color: #999;
                }
            }
        }
        
    }
    .upload{
        box-sizing: border-box;
        padding: 0 0.25rem;
        p{
            font-size: 0.24rem;
            margin: 0.25rem 0;
        }
        .card{
            width: 100%;
            display: flex;
            justify-content: space-between;
            &>div:nth-of-type(1){
                background: url(../../static/img/IdCard1.png) 0 0/100% 1.8rem no-repeat;
            }
            &>div:nth-of-type(2){
                background: url(../../static/img/IdCard2.png) 0 0/100% 1.8rem no-repeat;
            }
            div{
                width: 2.8rem;
                height: 1.8rem;
                border-radius: 0.1rem;
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                .loadImg{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .addImg{
                    width: 0.8rem;
                    height: 0.8rem;
                }
            }
        }
    }
    .cardTxt{
        display: flex;
        justify-content: space-between;
        text-align: center;
        p{
            width: 50%;
            text-align: center;
            color: #666;
        }
    }
    .sub{
        font-size: 0.24rem;
        width: 2.8rem;
        height: 0.5rem;
        background: #2b4cfd;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 0.5rem;
        margin: 0.8rem auto 0;
        color: #fff;
    }
</style>
<style scoped>
    .card /deep/ .van-uploader__upload{
        width:2.8rem;
        height:1.8rem;
        opacity: 0;
    }
    .card /deep/ .van-uploader__input{
        width: 2.8rem;
        height:1.8rem;
        opacity: 0;
    }
</style>