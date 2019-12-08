<template>
  <div class="workDetail">
    <div class="userMsg">
      <div class="workLeft">
        <p>已经汇聚BAT、华为、平安科技、中国移动等名企数十万用户</p>
        <span>
          认证方式: {{msg}}
          <van-icon name="edit" @click="$router.go(-1)" />
        </span>
      </div>
      <div class="workRight">
        <img src="@/static/img/workWhite.png" alt />
        <p>实名认证</p>
      </div>
    </div>
    <div style="width:100%;height:0.18rem;background:#f0f0f0"></div>
    <van-divider>{{msg}}</van-divider>
    <div class="workBtm">
      <span>{{type==1?'请上传带姓名及公司名称的图片':'请上传学生证照片'}}</span>
      <img :src="img_src" alt />
      <van-uploader
        :after-read="afterRead"
        style="position: absolute;top: 0;left: 0;opacity: 0;z-index:9;"
      />
    </div>
    <div class="sub" @click="submit">确认提交</div>
  </div>
</template>

<script>
import * as qiniu from "qiniu-js";
import { imgUpload, workCard, getToken } from "@/request/api.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      img_src: "",
      img: "",
      type: 1,
      msg: ""
    };
  },
  methods: {
    afterRead(file) {
      this.img_src = file.content;
      console.log(file);
      // var formData = new FormData();
      // formData.append("image", file.file);
      // imgUpload(formData).then(res => {
      //     console.log(res.data.img_url);
      //     this.img=res.data.img_url;
      // });
      var file = file.file; //Blob 对象，上传的文件
      getToken().then(res => {
        var uptoken = res.data.upload_token;
        var key = encodeURI(file.name); // 上传后文件资源名以设置的 key 为主，如果 key 为 null 或者 undefined，则文件资源名会以 hash 值作为资源名。
        let config = {
          useCdnDomain: true, //表示是否使用 cdn 加速域名，为布尔值，true 表示使用，默认为 false。
          region: null // 根据具体提示修改上传地区,当为 null 或 undefined 时，自动分析上传域名区域
        };
        let putExtra = {
          fname: "", //文件原文件名
          params: {}, //用来放置自定义变量
          mimeType: null //用来限制上传文件类型，为 null 时表示不对文件类型限制；限制类型放到数组里： ["image/png", "image/jpeg", "image/gif"]
        };
        var observable = qiniu.upload(file, key, uptoken, putExtra, config);
        observable.subscribe({
          next: result => {
            // 主要用来展示进度
            // console.log(result);
          },
          error: errResult => {
            Toast("上传失败");
          },
          complete: result => {
            // 接收成功后返回的信息
            console.log(result);
            this.img = result.key;
          }
        });
      });
    },
    submit() {
      if (this.img == "") {
        Toast("请上传您的证件图片");
      }
      workCard({ image: this.img }).then(res => {
        if (res.status) {
          Toast("提交成功，请耐心等待审核");
          setTimeout(() => {
            this.$router.go(-2);
          }, 1000);
        }
      });
    }
  },
  mounted() {
    // alert(this.$route.query.type);
    this.type = this.$route.query.type;
    this.msg = this.$route.query.msg;
  }
};
</script>

<style lang="scss" scoped>
.userMsg {
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
  & > .workLeft {
    width: 4rem;
    margin-top: 0.4rem;
    p {
      color: #fff;
    }
    span {
      display: inline-block;
      color: #fff;
      padding-top: 0.4rem;
      i {
        vertical-align: middle;
        margin-left: 0.05rem;
      }
    }
  }
  .workRight {
    margin-top: 0.45rem;
    width: 1rem;
    text-align: center;
    img {
      width: 0.7rem;
      height: 0.54rem;
      margin: 0 auto 0.1rem;
    }
    p {
      color: #fff;
    }
  }
}
.workBtm {
  width: 5.5rem;
  height: 2.8rem;
  background: url(../../static/img/workCard.png) 0 0/100% 100%;
  margin: 0 auto;
  font-size: 0.22rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  span {
    display: inline-block;
    height: 0.4rem;
    line-height: 0.4rem;
    background: rgba($color: #000000, $alpha: 0.5);
    padding: 0 0.35rem;
    border-radius: 0.2rem;
    color: #fafafa;
  }
}
.sub {
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
.workDetail /deep/ .van-uploader__upload {
  width: 5.5rem;
  height: 2.8rem;
  opacity: 0;
}
.workDetail /deep/ .van-uploader__input {
  width: 5.5rem;
  height: 2.8rem;
  opacity: 0;
}
</style>