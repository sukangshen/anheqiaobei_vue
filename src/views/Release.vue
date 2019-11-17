<template>
  <div class="release">
    <div class="top">
      <div class="loadTit">
        <span><a class="titBorder" style="margin-top:0.24rem;"></a>基本资料</span>
      </div>
      <div class="form">
        <ul>
          <li>
            <span>
              <img src="@/static/img/name.png" alt />姓名
            </span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
          </li>
          <li>
            <span>
              <img src="@/static/img/sex.png" alt />性别
            </span>
            <div>
              <!-- <van-radio-group
                v-model="gender"
                style="display:flex;line-height: 0.8rem;height: 0.8rem;">
                <van-radio :name="1">男</van-radio>
                <van-radio :name="2">女</van-radio>
              </van-radio-group> -->
              <div @click="genderShow=true;">
                <div v-if="gender==''" style="color:#999">请选择</div>
                <div v-else>{{gender}}</div>
              </div>
            </div>
          </li>
          <li>
            <span>
              <img src="@/static/img/height.png" alt />身高
            </span>
            <div>
              <!-- <input v-model="height" placeholder="单位（cm）" type='number'/> -->
              <div @click="heightShow=true;">
                <div v-if="height==''" style="color:#999">单位（cm）</div>
                <div v-else>{{height}}cm</div>
              </div>
            </div>
          </li>
          <li>
            <span>
              <img src="@/static/img/weight.png" alt />体重
            </span>
            <div>
              <!-- <input v-model="weight" placeholder="单位（kg）" type="number" /> -->
              <div @click="weightShow=true;">
                <div v-if="weight==''" style="color:#999">单位（kg）</div>
                <div v-else>{{weight}}kg</div>
              </div>
            </div>
          </li>
          <li>
            <span>
              <img src="@/static/img/birthday.png" alt />出生日期
            </span>
            <div @click="dateShow=true;">
              <div v-if="dateVal==''" style="color:#999">年/月/日</div>
              <div v-else>{{dateVal}}</div>
            </div>
          </li>
          <li>
            <span>
              <img src="@/static/img/family.png" alt />籍贯
            </span>
            <div @click="addressType=0;addressShow=true;">
              <div v-if="address_birth_name==''" style="color:#999">请选择籍贯</div>
              <div v-else>{{address_birth_name}}</div>
            </div>
          </li>
          <li>
            <span>
              <img src="@/static/img/address.png" alt />现居地
            </span>
            <div @click="addressType=1;addressShow=true;">
              <div v-if="address_live_name==''" style="color:#999">请选择现居地</div>
              <div v-else>{{address_live_name}}</div>
            </div>
          </li>
          <li :style="{height:tagNameList.lenght==1?'0.8rem;':'auto'}">
            <span>
              <img src="@/static/img/height.png" alt />我的标签
            </span>
              <div @click="tagBol=true;">
                <div style="color:#999">
                  <van-icon name="records" />
                </div>
                <!-- <div v-else style="line-height:0.65rem">
                  <span v-for="(item,i) in tagNameList" :key="i">{{item}}</span>
                </div> -->
              </div>
          </li>
          <li :style="{height:'auto'}">
              <div @click="tagBol=true;">
                <div style="line-height:0.65rem">
                  <span v-for="(item,i) in tagNameList" :key="i">{{item}}</span>
                </div>
              </div>
          </li>
          <li style="height:1.8rem;padding-bottom:0.2rem">
            <span>
              <img src="@/static/img/introduce.png" alt />个人介绍
            </span>
            <div>
              <textarea rows="3" v-model="self_intro" placeholder="介绍自己有趣的灵魂吧" maxlength="200"></textarea>
            </div>
            <a>{{self_intro.length}}/200</a>
          </li>
          <li style="height:1.8rem">
            <span>
              <img src="@/static/img/require.png" alt />择偶标准
            </span>
            <div>
              <textarea
                rows="3"
                v-model="friend_condition"
                placeholder="对另一半有什么要求呢"
                maxlength="200"
              ></textarea>
            </div>
            <a>{{friend_condition.length}}/200</a>
          </li>
          <li style="height:1.8rem">
            <span>
              <img src="@/static/img/require.png" alt />家庭背景
            </span>
            <div>
              <textarea
                rows="3"
                v-model="family_info"
                placeholder="简单介绍下家庭情况吧"
                maxlength="200"
              ></textarea>
            </div>
            <a>{{family_info.length}}/200</a>
          </li>
        </ul>
      </div>
      <!-- <van-steps direction="vertical" :active="3" active-icon="success" active-color="#38f">
    <van-step>
      <div>
            <span>姓名</span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
      </div>
    </van-step>
    <van-step>
      <div>
            <span>姓名</span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
      </div>
    </van-step>
    <van-step>
      <div>
            <span>姓名</span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
      </div>
    </van-step>
    <van-step>
      <div>
            <span>姓名</span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
      </div>
    </van-step>
    <van-step>
      <div>
            <span>姓名</span>
            <div>
              <input v-model="userName" placeholder="请输入用户名" />
            </div>
      </div>
    </van-step>
      </van-steps>-->

      <div class="loadTit">
        <span><a class="titBorder" style="margin-top:0.24rem;"></a>上传照片</span>
        <a>最多可上传10张图片</a>
      </div>
      <van-uploader
        v-model="preview1"
        :max-count="10"
        :before-read="beforeRead1"
        :before-delete="beforeDelete1"
      />
      <div class="loadTit">
        <span><a class="titBorder" style="margin-top:0.24rem;"></a>上传微信二维码</span>
      </div>
      <van-uploader
        v-model="preview2"
        :max-count="1"
        :before-read="beforeRead2"
        :before-delete="beforeDelete2"
      />
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
    <van-popup v-model="addressShow" position="bottom">
      <van-area
        :area-list="areaList"
        value="110101"
        @confirm="addressConfirm"
        @cancel="addressShow=false;"
      />
    </van-popup>
    <van-popup v-model="heightShow" position="bottom">
      <van-picker
        show-toolbar
        title="身高(cm)"
        :columns="heightList"
        @cancel="heightShow=false"
        @confirm="heightConfirm"
        :default-index="gender=='男'?30:20"
      />
    </van-popup>
    <van-popup v-model="weightShow" position="bottom">
      <van-picker
        show-toolbar
        title="体重(kg)"
        :columns="weightList"
        @cancel="weightShow=false"
        @confirm="weightConfirm"
        :default-index="gender=='男'?20:10"
      />
    </van-popup>
    <van-popup v-model="genderShow" position="bottom">
      <van-picker
        show-toolbar
        title="性别"
        :columns="genderList"
        @cancel="genderShow=false"
        @confirm="genderConfirm"
      />
    </van-popup>
    <div class="tags" v-show="tagBol">
      <span>您觉得哪些标签更符合你？</span>
      <div v-for="(item,i) in tagList" :key="i">
        <p>{{item.name}}</p>
        <span v-for="(child,j) in item.child_list" :key="j" :class="child.bol?'act':''" @click="child.bol=!child.bol;">{{child.name}}</span>
      </div>
      <p class="btm" @click="tagId">
        保 存
      </p>
    </div>
  </div>
</template>

<script>
import { release, imgUpload ,getTagList} from "@/request/api.js";
import areas from "@/static/js/area.js";
import moment from "moment";
import axios from "axios";
import { Toast, Dialog } from "vant";
export default {
  name: "release",
  data() {
    return {
      tagBol:false,
      genderShow:false,
      genderList: ['男','女'],
      weightShow: false,
      weightList: [],
      heightShow: false,
      heightList: [],
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
      preview1: [],
      preview2: [],
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
      address_live: "",
      address_birth: "",
      address_live_name: "",
      address_birth_name: "",
      addressType: 0,
      weight: "",
      height: "",
      gender: "",
      family_info:'',
      areaList: areas,
      tagList:[],
      tagIdList:[],
      tagNameList:[]
    };
  },
  methods: {
    tagId(){
      this.tagIdList=[];
      this.tagNameList=[];
      for(var i in this.tagList){
        var item = this.tagList[i];
        for(var j in item.child_list){
          if(item.child_list[j].bol){
            this.tagIdList.push(item.child_list[j].id);
            this.tagNameList.push(item.child_list[j].name);
          }
        }
      }
      this.tagBol=false;
      console.log(this.tagIdList);
    },
    genderConfirm(e){
      this.gender=e;
      this.genderShow = false;
    },
    weightConfirm(e){
      this.weight = e;
      this.weightShow = false;
    },
    heightConfirm(e) {
      this.height = e;
      this.heightShow = false;
    },
    beforeRead2(files) {
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
            this.imgList2.push(res.data.img_url);
          });
          return true;
        }
      } else {
        Toast("上传图片格式有误");
        return false;
      }
    },
    beforeDelete2(files, index) {
      this.imgList2.splice(index.index, 1);
      return true;
    },
    beforeDelete1(files, index) {
      this.imgList1.splice(index.index, 1);
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
            this.imgList1.push(res.data.img_url);
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
      if (this.userName == "") {
        Toast("请填写您的姓名");
        return;
      }
      if (this.gender == "") {
        Toast("请选择您的性别");
        return;
      }
      if (this.height == "") {
        Toast("请填写您的身高");
        return;
      }
      if (this.weight == "") {
        Toast("请填写您的体重");
        return;
      }
      if (this.dateVal == "") {
        Toast("请选择您的出生日期");
        return;
      }
      if (this.address_live_name == "") {
        Toast("请选择您的家乡地址");
        return;
      }
      if (this.address_birth_name == "") {
        Toast("请选择您的当前现居地");
        return;
      }
      if (this.self_intro == "") {
        Toast("介绍下自己，让对方初步了解您");
        return;
      }
      if (this.friend_condition == "") {
        Toast("对另一半的要求是什么呢");
        return;
      }
      if (this.family_info == "") {
        Toast("简单介绍下家庭情况吧");
        return;
      }
      Dialog.confirm({
        title: "提示",
        message: "确定要发布吗？"
      })
        .then(() => {
          release({
            family_info:this.family_info,
            tag_id:this.tagIdList,
            self_img: this.imgList1,
            wechat_img: this.imgList2,
            gender: this.gender=='男'?1:2,
            age: this.dateVal,
            height: this.height,
            weight: this.weight,
            self_intro: this.self_intro,
            friend_condition: this.friend_condition,
            address_live: this.address_live,
            address_live_name: this.address_live_name,
            address_birth: this.address_birth,
            address_birth_name: this.address_birth_name
          }).then(res => {
            if (res.status) {
              Toast("发布成功");
            }
          });
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    addressConfirm(e) {
      console.log(e);
      var location = e[0].name + "-" + e[1].name + "-" + e[2].name;
      var codes = e[0].code + "-" + e[1].code + "-" + e[2].code;
      if (this.addressType == 0) {
        this.address_birth_name = location;
        this.address_birth = codes;
      } else {
        this.address_live_name = location;
        this.address_live = codes;
      }
      this.addressShow = false;
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
    this.heightList = [];
    // console.log(areas);
    for (var i = 140; i < 200; i++) {
      this.heightList.push(i);
    }
    this.weightList = [];
    for (var i = 40; i < 100; i++) {
      this.weightList.push(i);
    }
    getTagList().then(res=>{
      for(var i in res.data){
        var item = res.data[i];
        for(var j in item.child_list){
          item.child_list[j].bol=false;
        }
      }
      this.tagList=res.data;
    })
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
  display: flex;
  justify-content: space-between;
}
.loadTit > span {
  color: #333;
  font-weight: 500;
  line-height: 0.8rem;
}

.loadTit > a {
  font-size: 0.22rem;
  color: #999;
}
.form {
  ul {
    li {
      width: 100%;
      height: 0.8rem;
      border-bottom: 1px solid #eee;
      line-height: 0.8rem;
      box-sizing: border-box;
      padding: 0 0.2rem 0 0;
      display: flex;
      position: relative;
      a {
        display: inline-block;
        position: absolute;
        bottom: 0.2rem;
        right: 0.3rem;
        line-height: 0;
        background: #fff;
        color: #aaa;
      }
      div {
        span{
          display: inline-block;
          height: 0;
          line-height: 0;
          font-size: 0.2rem;
          padding: 0.2rem 0.2rem;
          border-radius: 0.1rem;
          border: 1px solid #2b4cfd;
          margin-right: 0.05rem;
          color: #2b4cfd;
        }
        flex: 1;
        input {
          width: 100%;
          height: 100%;
          background: #fff;
        }
        input::placeholder {
          color: #999;
        }
        textarea::placeholder {
          color: #999;
        }
        textarea {
          width: 100%;
          height: 80%;
          line-height: 0.5rem;
          box-sizing: border-box;
          padding: 0.1rem 0 0.1rem;
        }
      }
      &>span {
        display: inline-block;
        width: 1.8rem;
        img {
          width: 0.3rem;
          height: 0.3rem;
          vertical-align: top;
          margin-top: 0.25rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
.van-steps {
  font-size: 0.3rem;
  & > div {
    width: 100%;
    height: 0.8rem;
    border-bottom: 1px solid #eee;
    line-height: 0.8rem;
    box-sizing: border-box;
    padding: 0 0.2rem 0 0;
    display: flex;
    position: relative;
    span {
      display: inline-block;
      width: 1.3rem;
      line-height: 0.8rem;
      img {
        width: 0.3rem;
        height: 0.3rem;
        vertical-align: top;
        margin-top: 0.26rem;
        margin-right: 0.1rem;
      }
    }
    div {
      flex: 1;
      display: flex;
      input {
        width: 100%;
        height: 100%;
        background: #fff;
      }
      input::placeholder {
        color: #999;
      }
      textarea::placeholder {
        color: #999;
      }
      textarea {
        width: 100%;
        height: 80%;
        line-height: 0.5rem;
        box-sizing: border-box;
        padding: 0.1rem 0 0.1rem;
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
.tags{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba($color: #fff, $alpha: 1);
  &>span{
    font-size: 0.26rem;
    display: block;
    box-sizing: border-box;
    padding: 0.1rem 0 0 0.2rem;
    margin-bottom: -0.2rem;
  }
  &>div{
    font-size: 0.2rem;
    padding: 0.2rem 0 0 0.2rem;
    p{
      font-size: 0.26rem;
      border-left: 3px solid #2b4cfd;
      padding-left: 0.1rem;
      margin: 0.2rem 0;
    }
    span{
      display: inline-block;
      padding:0.08rem 0.25rem;
      border-radius: 0.1rem;
      border: 1px solid #eee;
      // color: #333;
      margin:0.1rem;
      background: #fffff5;
    }
  }
  .btm{
    width: 2.5rem;
    height: 0.7rem;
    color: #fff;
    text-align: center;
    line-height: 0.7rem;
    background: #2b4cfd;
    font-size: 0.28rem;
    position:absolute;
    bottom: 0.5rem;
    border-radius: 0.35rem;
    left: 2rem;
  }
}
.tags .act{
  background: #2b4cfd;
  color: #fff;
}
</style>
