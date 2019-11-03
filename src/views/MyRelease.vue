<template>
  <div class="myRelease">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"  
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
  </div>
</template>

<script>
import { card } from 'vant';
import {createOrder} from "@/request/api.js";
export default {
  name: "myRelease",
  data() {
    return {
      value:''
    };
  },
  methods: {},
  mounted() {
      alert(location.href);
      createOrder({openid:this.$route.query.open_id}).then(res=>{
        alert(JSON.stringify(res));
      })
  }
};
</script>
<style lang="scss" scoped>

</style>
