(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4feebab0"],{a30a:function(t,e,i){"use strict";var a=i("e1b0"),n=i.n(a);n.a},e1b0:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticClass:"top"},[i("div",[i("span",{class:1==t.active?"activeClass":"",on:{click:function(e){return t.tab(1)}}},[t._v("最新")]),i("span",{class:2==t.active?"activeClass":"",on:{click:function(e){return t.tab(2)}}},[t._v("最热")]),i("a")])]),i("div",{staticClass:"cont",on:{touchend:t.load}},[i("ul",t._l(t.list,(function(e,a){return i("li",{key:a,on:{click:function(i){return t.goDetail(e.profile_id)}}},[i("img",{attrs:{src:e["self_img"]?e["self_img"][0]:"http://img4.imgtn.bdimg.com/it/u=1212738062,1791075344&fm=26&gp=0.jpg",alt:""}}),i("div",[i("img",{attrs:{src:e.headimgurl,alt:""}}),i("span",{staticStyle:{float:"left"}},[t._v("善良的")]),i("span",{staticStyle:{float:"right"}},[t._v(t._s(e.age)+"岁/"+t._s(e.address_live_name.split("-")[0]))])])])})),0),i("p",[t._v(t._s(t.msg))])])])},n=[],s=i("fd03"),c={name:"about",data:function(){return{loading:!1,active:1,selected:"/home",list:[],allLoaded:!1,msg:"上拉加载更多",page:1,msgBol:!0}},watch:{selected:function(t){this.$router.push(t)}},methods:{load:function(){if(this.msgBol){this.page++;var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.scrollHeight||document.body.scrollHeight;t+e>=i&&this.getList()}},goDetail:function(t){this.$router.push({path:"/detailed",query:{id:t}})},tab:function(t){this.active=t,document.querySelector(".top a").style.left=1==t?"0.2rem":"0.94rem"},getList:function(){var t=this;Object(s["c"])({limit:"20",page:this.page}).then((function(e){if(e.status){var i=t.list.concat(e.data.data);t.list=i,t.list.length==e.data.total&&(t.msg="暂无更多数据",t.msgBol=!1)}}))}},mounted:function(){this.getList()}},o=c,l=(i("a30a"),i("2877")),u=Object(l["a"])(o,a,n,!1,null,"13b14eee",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4feebab0.f9a76446.js.map