(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4967c643"],{"10d7":function(t,e,i){},"5a15":function(t,e,i){"use strict";var n=i("10d7"),s=i.n(n);s.a},"79a3":function(t,e,i){t.exports=i.p+"img/home_top4.8609c955.png"},"8dda":function(t,e,i){t.exports=i.p+"img/home_top1.11afc5d4.png"},c4b8:function(t,e,i){t.exports=i.p+"img/home_top2.f0b0b99c.png"},e0ed:function(t,e,i){t.exports=i.p+"img/home_top3.28718210.png"},f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"topBg"},[n("div",{staticClass:"swiper"},[n("van-swipe",{attrs:{autoplay:2e3,loop:"","indicator-color":"#1989fa !important"}},t._l(t.slides,(function(e,i){return n("van-swipe-item",{key:i},[n("img",{attrs:{src:e.img_url,alt:""},on:{click:function(i){return t.goTargetUrl(e.target)}}})])})),1)],1)]),n("div",{staticClass:"topList"},[n("ul",[n("li",{on:{click:function(e){return t.$router.push("/introduce/system")}}},[n("img",{attrs:{src:i("8dda"),alt:""}}),n("span",[t._v("认证体系")])]),n("li",{on:{click:function(e){return t.$router.push("/introduce/process")}}},[n("img",{attrs:{src:i("c4b8"),alt:""}}),n("span",[t._v("发布流程")])]),n("li",{on:{click:function(e){return t.$router.push("/introduce/relevant")}}},[n("img",{attrs:{src:i("e0ed"),alt:""}}),n("span",[t._v("关于我们")])]),n("li",{on:{click:function(e){return t.$router.push("/introduce/question")}}},[n("img",{attrs:{src:i("79a3"),alt:""}}),n("span",[t._v("常见问题")])])])]),n("div",{staticStyle:{width:"100%",height:"0.1rem",background:"#eee"}}),n("div",{staticClass:"top"},[n("div",[n("span",{class:1==t.active?"activeClass":"",on:{click:function(e){return t.tab(1)}}},[t._v("最新")]),n("span",{class:2==t.active?"activeClass":"",on:{click:function(e){return t.tab(2)}}},[t._v("最热")]),n("a")])]),n("div",{staticClass:"cont",on:{touchend:t.load}},[n("ul",t._l(t.list,(function(e,i){return n("li",{key:i,on:{click:function(i){return t.goDetail(e.profile_id)}}},[n("img",{attrs:{src:e["self_img"]?e["self_img"][0]:"",alt:""}}),n("div",{staticClass:"detail"},[n("img",{attrs:{src:e.headimgurl,alt:""}}),n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.nickname))]),n("span",{staticStyle:{float:"right"}},[t._v(t._s(e.age)+"岁/"+t._s(e.address_live_name.split("-")[0]))])])])})),0),n("p",[n("van-divider",[t._v(t._s(t.msg))])],1)])])},s=[],a=i("fd03"),o={name:"about",data:function(){return{loading:!1,active:1,selected:"/home",list:[],allLoaded:!1,msg:"上拉加载更多",page:1,msgBol:!0,slides:[]}},watch:{selected:function(t){this.$router.push(t)}},methods:{goTargetUrl:function(t){location.href=t},load:function(){if(this.msgBol){this.page++;var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.scrollHeight||document.body.scrollHeight;t+e>=i&&this.getList()}},goDetail:function(t){this.$router.push({path:"/detailed",query:{id:t}})},tab:function(t){this.active=t,document.querySelector(".top a").style.left=1==t?"0.06rem":"0.95rem"},getList:function(){var t=this;Object(a["c"])({limit:"20",page:this.page}).then((function(e){if(e.status){var i=t.list.concat(e.data.data);t.list=i,t.list.length==e.data.total&&(t.msg="暂无更多数据",t.msgBol=!1)}}))}},mounted:function(){var t=this;this.getList(),Object(a["d"])().then((function(e){console.log(e.data),t.slides=e.data}))}},c=o,l=(i("5a15"),i("2877")),r=Object(l["a"])(c,n,s,!1,null,"6025e320",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-4967c643.43eba289.js.map