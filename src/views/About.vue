<template>
  <div class="about">
    <div class="top">
      <span :class="active==1?'activeClass':''" @click="tab(1)">最新</span><span :class="active==2?'activeClass':''" @click="tab(2)">最热</span>
    </div>
    <div class="cont">
      <ul>
        <li v-for="(item,i) in list" :key="i" @click="goDetail">
          <img :src="item['self_img']?item['self_img'][0]:'http://img4.imgtn.bdimg.com/it/u=1212738062,1791075344&fm=26&gp=0.jpg'" alt="">
          <div><span style="float:left">善良的毛豆</span> <span style="float:right">{{item.age}}岁 | {{item.address_live.split('-')[0]}}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {fetchList,getList} from '@/request/api.js'
export default {
  name: 'about',
  data(){
    return{
      loading:false,
      active:1,
      selected:'/home',
      list:[1,2,3,4,5,6],
      allLoaded:false
    }
  },
  watch:{
    selected(newVal){
      this.$router.push(newVal);
    }
  },
  methods:{
    goDetail(){
      this.$router.push('/detailed');
    },
    tab(i){
      this.active=i;
    },
  },
  mounted(){
    if(location.href.includes('token')){

    }else{
      // location.href='http://api.love.anheqiaobei.com/api/wechat/auth?target_url=https://www.baidu.com/';
    }
    getList({limit:'20'}).then(res=>{
      this.list=res.data.data;
    })
  }
}
</script>
<style  scoped>
  .about{
    width: 100%;
    padding: 0 0.25rem;
    box-sizing: border-box;
  }
  .top{
    font-size: 0.3rem;
    margin: 0.2rem 0 0.5rem;
  }
  .top>span{
    margin-right: 0.2rem;
    padding-bottom: 0.08rem;
  }
  .activeClass{
    color: #333;
    box-sizing: border-box;
    border-bottom: 3px solid #2b4cfd;
  }
  .cont ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .cont ul>li{
    width: 2.93rem;
    height: 4.3rem;
    overflow: hidden;
  }
  .cont ul>li>img{
    width: 100%;
    height: 3.8rem;
    object-fit: cover;
    vertical-align: middle;
  }
  .cont ul>li>div{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.2rem;
    box-sizing: border-box;
    margin: 0.1rem 0;
    padding: 0 0.1rem;
  }

</style>
