<template>
  <div class="release">
    <div class="top">
      <div class="loadTit">
        <span>基本资料</span>
      </div>
      <div class="form">
        <ul>
          <li>
            <span>姓名</span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
          </li>
          <li>
            <span>性别</span>
            <div>
              <van-radio-group
                v-model="gender"
                style="display:flex;line-height: 0.8rem;height: 0.8rem;"
              >
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
              </van-radio-group>
            </div>
          </li>
          <li>
            <span>身高</span>
            <div>
              <input v-model="height" placeholder="单位（cm）" />
            </div>
          </li>
          <li>
            <span>体重</span>
            <div>
              <input v-model="weight" placeholder="单位（kg）" />
            </div>
          </li>
          <li>
            <span>出生日期</span>
            <div @click="dateShow=true;">
              <input v-model="dateVal" placeholder="年/月/日" />
            </div>
          </li>
          <li>
            <span>籍贯</span>
            <div>
              <input v-model="address" placeholder="请选择籍贯" @click="addressShow=true;" />
            </div>
          </li>
          <li style="height:1.8rem;padding-bottom:0.2rem">
            <span>个人介绍</span>
            <div>
              <textarea rows="3" v-model="self_intro" placeholder="介绍自己有趣的灵魂吧"></textarea>
            </div>
          </li>
          <li style="height:1.8rem">
            <span>择偶标准</span>
            <div>
              <textarea rows="3" v-model="friend_condition" placeholder="对另一半有什么要求呢"></textarea>
            </div>
          </li>
        </ul>
      </div>
      <div class="loadTit">
        <span>上传照片</span>
        <a>最多可上传6张图片</a>
      </div>
      <van-uploader v-model="preview1" :max-count="6" :before-read="beforeRead1" :before-delete='beforeDelete1'/>
      <div class="loadTit">
        <span>上传微信二维码</span>
      </div>
      <van-uploader v-model="preview2" :max-count="1" :before-read="beforeRead2"  :before-delete='beforeDelete2'/>
      <div class="send">
        <img src="@/static/img/send.png" alt @click="submit" />
      </div>
    </div>
    <van-popup v-model="dateShow" position="bottom">
      <van-datetime-picker
        v-model="value"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @cancel="dateShow=false;"
        @confirm="confirm"
      />
    </van-popup>
    <van-popup v-model="addressShow" v-if="addressShow" position="bottom">
      <van-area
        :area-list="areaList"
        v-model="address"
        :value="dizhi"
        @confirm="addressConfirm"
        @cancel="addressShow=false;"
      />
    </van-popup>
  </div>
</template>

<script>
import { release, imgUpload } from "@/request/api.js";
import areas from "@/static/js/area.js";
import moment from "moment";
import axios from "axios";
import { Toast } from 'vant';
export default {
  name: "release",
  data() {
    return {
      dizhi: [
        { code: "110000", name: "北京市" },
        { code: "110100", name: "北京市" },
        { code: "110101", name: "东城区" }
      ],
      addressShow: false,
      dateShow: false,
      maxDate: new Date(),
      minDate: new Date(1900, 1, 1),
      value: new Date(),
      preview1:[],
      preview2:[],
      imgList1: [],
      imgList2: [],
      userName: "",
      dialogImageUrl: "",
      dialogVisible: false,
      sexBol: false,
      sex: "",
      sexMsg: "请选择性别",
      dateVal: "",
      self_intro: "",
      friend_condition: "",
      address: "",
      weight: "",
      height: "",
      gender: "1",
      areaList: areas
    };
  },
  methods: {
    beforeRead2(files){
      if (
          files.type == "image/jpeg" ||
          files.type == "image/jpg" ||
          files.type == "image/png" ||
          files.type == "image/gif"
        ) {
          if (files.size / 1024 / 1024 > 3) {
            Toast("上传图片大小超过3M");
            return false;
          } else {
            var formData = new FormData();
            formData.append("image", files);
            imgUpload(formData).then(res => {
              this.imgList2.push(res.data.img_url)
            });
            return true;
          }
        } else {
          Toast("上传图片格式有误");
          return false;
        }
    },
    beforeDelete2(files,index){
      this.imgList2.splice(index.index,1);
      return true;
    },
    beforeDelete1(files,index){
      this.imgList1.splice(index.index,1);
      return true;
    },
    beforeRead1(files) {
      // 判断是否是选中了多个，暂时不支持
      // if (files[0]) {
      //   for (var i in files) {
      //     // 判断图片格式
      //     if (
      //       files[i].type == "image/jpeg" ||
      //       files[i].type == "image/jpg" ||
      //       files[i].type == "image/png" ||
      //       files[i].type == "image/gif"
      //     ) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //     // 判断图片大小
      //     if (files[i].size / 1024 / 1024 > 3) {
      //       Toast("上传图片中存在大小超过3M的文件");
      //       return false;
      //     } else {
      //       return true;
      //     }
      //   }
      // } else {
        if (
          files.type == "image/jpeg" ||
          files.type == "image/jpg" ||
          files.type == "image/png" ||
          files.type == "image/gif"
        ) {
          if (files.size / 1024 / 1024 > 3) {
            Toast("上传图片大小超过3M");
            return false;
          } else {
            var formData = new FormData();
            formData.append("image", files);
            imgUpload(formData).then(res => {
              this.imgList1.push(res.data.img_url)
            });
            return true;
          }
        } else {
          Toast("上传图片格式有误");
          return false;
        }
      // }
    },
    submit() {
      release({
        self_img: this.imgList1,
        wechat_img: this.imgList2,
        gender: "1",
        // address: "河南省周口市",
        age: "123",
        height: this.height,
        weight: this.weight,
        self_intro: this.self_intro,
        friend_condition: this.friend_condition,
        address_live:'123',
        address_live_name:'123',
        address_birth:'123',
        address_birth_name:'123'
      }).then(res => {
        console.log(res);
        if(res.status){
          Toast("发布成功");
        }
      });
    },
    addressConfirm(e) {
      console.log(e);
      var location = e[0].name + "/" + e[1].name + "/" + e[2].name;
      this.address = location;
      this.addressShow = false;
      this.dizhi = [
        { code: "110000", name: "北京市" },
        { code: "110100", name: "北京市" },
        { code: "110101", name: "东城区" }
      ];
    },
    confirm() {
      var filterVal = moment(this.value).format("YYYY-MM-DD");
      this.dateVal = filterVal;
      this.dateShow = false;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // 发布
    sub() {
      release({
        self_img: this.imgList1,
        wechat_img: this.imgList2,
        gender: "1",
        address: "河南省周口市",
        age: "123",
        height: this.height,
        weight: this.weight,
        self_intro: this.self_intro,
        friend_condition: this.friend_condition
      }).then(res => {
        console.log(res);
      });
    }
    // 解析base64格式
    // files(e) {
    //   console.log(e.target.files[0]);
    //   let reader = new FileReader();
    //   reader.readAsDataURL(e.target.files[0]);
    //   reader.onloadend = function() {
    //     let result = this.result;
    //     console.log(this.result);
    //   };
    // }
  },
  mounted() {
    // console.log(areas);
  }
};
</script>
<style lang="scss" scoped>
.release {
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  padding: 0 0.25rem;
}
.top {
  font-size: 0.26rem;
}
.top .loadTit {
  height: 0.8rem;
  line-height: 0.8rem;
}
.loadTit > span {
  float: left;
  color: #333;
  font-weight: 500;
}
.loadTit > a {
  font-size: 0.22rem;
  color: #999;
  float: right;
}

.form {
  ul {
    li {
      width: 100%;
      height: 0.8rem;
      border-bottom: 1px solid #eee;
      line-height: 0.8rem;
      box-sizing: border-box;
      padding: 0 0.2rem;
      display: flex;
      div {
        flex: 1;
        input {
          width: 100%;
          height: 100%;
        }
        textarea {
          width: 100%;
          height: 100%;
          line-height: 0.5rem;
          box-sizing: border-box;
          padding: 0.1rem 0 0.3rem;
        }
      }
      span {
        display: inline-block;
        width: 1.5rem;
        // text-align: right
      }
    }
  }
}
.send {
  width: 100%;
  text-align: center;
  img {
    width: 2.64rem;
    height: 0.74rem;
    margin-top: 0.3rem;
  }
}
</style>
