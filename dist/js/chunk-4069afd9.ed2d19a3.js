(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4069afd9"],{4319:function(t,e,i){},"6b25":function(t,e,i){"use strict";var a=i("4319"),s=i.n(a);s.a},"79a3":function(t,e,i){t.exports=i.p+"img/home_top4.8609c955.png"},"8dda":function(t,e,i){t.exports=i.p+"img/home_top1.11afc5d4.png"},c4b8:function(t,e,i){t.exports=i.p+"img/home_top2.f0b0b99c.png"},e0ed:function(t,e,i){t.exports=i.p+"img/home_top3.28718210.png"},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticClass:"topBg"},[i("div",{staticClass:"swiper"},[i("van-swipe",{attrs:{"indicator-color":"#1989fa !important"}},t._l(t.slides,(function(e,a){return i("van-swipe-item",{key:a},[i("img",{attrs:{src:e.img_url,alt:""},on:{click:function(i){return t.goTargetUrl(e.target)}}})])})),1)],1)]),t._m(0),i("div",{staticStyle:{width:"100%",height:"0.1rem",background:"#eee"}}),i("div",{staticClass:"top"},[i("div",[i("span",{class:1==t.active?"activeClass":"",on:{click:function(e){return t.tab(1)}}},[t._v("最新")]),i("span",{class:2==t.active?"activeClass":"",on:{click:function(e){return t.tab(2)}}},[t._v("最热")]),i("a")])]),i("div",{staticClass:"cont",on:{touchend:t.load}},[i("ul",t._l(t.list,(function(e,a){return i("li",{key:a,on:{click:function(i){return t.goDetail(e.profile_id)}}},[i("img",{attrs:{src:e["self_img"]?e["self_img"][0]:"",alt:""}}),i("div",{staticClass:"detail"},[i("img",{attrs:{src:e.headimgurl,alt:""}}),i("span",{staticStyle:{float:"left"}},[t._v(t._s(e.nickname))]),i("span",{staticStyle:{float:"right"}},[t._v(t._s(e.age)+"岁/"+t._s(e.address_live_name.split("-")[0]))])])])})),0),i("p",[t._v(t._s(t.msg))])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topList"},[a("ul",[a("li",[a("img",{attrs:{src:i("8dda"),alt:""}}),a("span",[t._v("认证体系")])]),a("li",[a("img",{attrs:{src:i("c4b8"),alt:""}}),a("span",[t._v("发布流程")])]),a("li",[a("img",{attrs:{src:i("e0ed"),alt:""}}),a("span",[t._v("关于我们")])]),a("li",[a("img",{attrs:{src:i("79a3"),alt:""}}),a("span",[t._v("常见问题")])])])])}],n=i("fd03"),c={name:"about",data:function(){return{loading:!1,active:1,selected:"/home",list:[],allLoaded:!1,msg:"上拉加载更多",page:1,msgBol:!0,slides:[]}},watch:{selected:function(t){this.$router.push(t)}},methods:{goTargetUrl:function(t){location.href=t},load:function(){if(this.msgBol){this.page++;var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.scrollHeight||document.body.scrollHeight;t+e>=i&&this.getList()}},goDetail:function(t){this.$router.push({path:"/detailed",query:{id:t}})},tab:function(t){this.active=t,document.querySelector(".top a").style.left=1==t?"0.06rem":"0.95rem"},getList:function(){var t=this;Object(n["c"])({limit:"20",page:this.page}).then((function(e){if(e.status){var i=t.list.concat(e.data.data);t.list=i,t.list.length==e.data.total&&(t.msg="暂无更多数据",t.msgBol=!1)}}))}},mounted:function(){var t=this;this.getList(),Object(n["d"])().then((function(e){console.log(e.data),t.slides=e.data}))}},o=c,l=(i("6b25"),i("2877")),r=Object(l["a"])(o,a,s,!1,null,"04aeb492",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-4069afd9.ed2d19a3.js.map