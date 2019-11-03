<template>
  <div class="myRelease">
    123
  </div>
</template>

<script>
import {createOrder} from "@/request/api.js";
export default {
  name: "myRelease",
  data() {
    return {
    };
  },
  methods: {},
  mounted() {
      createOrder({openid:sessionStorage.openId,total_fee:'1',goods_name:'爱情'}).then(res=>{
        alert(JSON.stringify(res));
      })
  }
};
</script>
<style lang="scss" scoped>

</style>
