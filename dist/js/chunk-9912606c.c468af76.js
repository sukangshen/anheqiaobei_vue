(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9912606c"],{"16c6":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("6b54"),a("b54a"),a("28a5");var i=a("fd03"),n=a("18a0"),s=a.n(n),c=a("d399");function r(t){return new Promise((function(e,a){var n=encodeURIComponent(window.location.href.split("#")[0]);Object(i["h"])({url:n}).then((function(a){s.a.config({debug:!1,appId:a.data.appId,timestamp:a.data.timestamp,nonceStr:a.data.nonceStr,signature:a.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]});var i={imgUrl:t.imgUrl,desc:t.desc,title:t.title,link:t.link,success:function(){Object(c["a"])("分享成功！")},cancel:function(){Object(c["a"])("已取消分享！")}};s.a.ready((function(){s.a.onMenuShareTimeline(i),s.a.onMenuShareAppMessage(i)})),e(a)})).catch((function(t){console.log(t),a(t)})),s.a.error((function(t){console.log(t),a(t),Object(c["a"])(t.errMsg.toString())}))}))}},"28a5":function(t,e,a){"use strict";var i=a("aae3"),n=a("cb7c"),s=a("ebd6"),c=a("0390"),r=a("9def"),o=a("5f1b"),l=a("520a"),u=a("79e5"),d=Math.min,f=[].push,g="split",h="length",m="lastIndex",v=4294967295,p=!u((function(){RegExp(v,"y")}));a("214f")("split",2,(function(t,e,a,u){var b;return b="c"=="abbc"[g](/(b)*/)[1]||4!="test"[g](/(?:)/,-1)[h]||2!="ab"[g](/(?:ab)*/)[h]||4!="."[g](/(.?)(.?)/)[h]||"."[g](/()()/)[h]>1||""[g](/.?/)[h]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return a.call(n,t,e);var s,c,r,o=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=void 0===e?v:e>>>0,p=new RegExp(t.source,u+"g");while(s=l.call(p,n)){if(c=p[m],c>d&&(o.push(n.slice(d,s.index)),s[h]>1&&s.index<n[h]&&f.apply(o,s.slice(1)),r=s[0][h],d=c,o[h]>=g))break;p[m]===s.index&&p[m]++}return d===n[h]?!r&&p.test("")||o.push(""):o.push(n.slice(d)),o[h]>g?o.slice(0,g):o}:"0"[g](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,i){var n=t(this),s=void 0==a?void 0:a[e];return void 0!==s?s.call(a,n,i):b.call(String(n),a,i)},function(t,e){var i=u(b,t,this,e,b!==a);if(i.done)return i.value;var l=n(t),f=String(this),g=s(l,RegExp),h=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"y":"g"),w=new g(p?l:"^(?:"+l.source+")",m),_=void 0===e?v:e>>>0;if(0===_)return[];if(0===f.length)return null===o(w,f)?[f]:[];var A=0,S=0,C=[];while(S<f.length){w.lastIndex=p?S:0;var y,M=o(w,p?f:f.slice(S));if(null===M||(y=d(r(w.lastIndex+(p?0:S)),f.length))===A)S=c(f,S,h);else{if(C.push(f.slice(A,S)),C.length===_)return C;for(var k=1;k<=M.length-1;k++)if(C.push(M[k]),C.length===_)return C;S=A=y}}return C.push(f.slice(A)),C}]}))},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"386b":function(t,e,a){var i=a("5ca1"),n=a("79e5"),s=a("be13"),c=/"/g,r=function(t,e,a,i){var n=String(s(t)),r="<"+e;return""!==a&&(r+=" "+a+'="'+String(i).replace(c,"&quot;")+'"'),r+">"+n+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(r),i(i.P+i.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},"6b54":function(t,e,a){"use strict";a("3846");var i=a("cb7c"),n=a("0bfb"),s=a("9e1e"),c="toString",r=/./[c],o=function(t){a("2aba")(RegExp.prototype,c,t,!0)};a("79e5")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?o((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)})):r.name!=c&&o((function(){return r.call(this)}))},"8d0f":function(t,e,a){"use strict";var i=a("cbda"),n=a.n(i);n.a},b54a:function(t,e,a){"use strict";a("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},cbda:function(t,e,a){},e7f2:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"release"},[a("div",{staticClass:"head",on:{click:t.goPreview}},[a("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#2b4cfd"}},t._l(t.data.self_img,(function(t,e){return a("van-swipe-item",{key:e},[a("img",{staticClass:"imgClass",attrs:{src:t,alt:""}})])})),1)],1),a("van-image-preview",{attrs:{images:t.images},on:{change:t.onChange},scopedSlots:t._u([{key:"index",fn:function(){return[t._v(t._s(t.index+1)+"/"+t._s(t.images.length))]},proxy:!0}]),model:{value:t.preview,callback:function(e){t.preview=e},expression:"preview"}}),a("div",{staticClass:"brief"},[a("p",[a("img",{attrs:{src:t.data.headimgurl,alt:""}}),t._v("\n      "+t._s(t.data.nickname)+"\n    ")]),a("div",[a("p",[t._v(t._s(t.data.birth)+" | "+t._s(t.data.height)+"cm | "+t._s(t.data.weight)+"kg | "+t._s(t.data.job))]),a("p",[t._v(t._s(t.data.address_birth_name&&t.data.address_birth_name.split("-")[0])+t._s(t.data.address_birth_name&&t.data.address_birth_name.split("-")[1])+" | 现居"+t._s(t.data.address_live_name&&t.data.address_live_name.split("-")[0])+t._s(t.data.address_live_name&&t.data.address_live_name.split("-")[1]))])]),t._m(0)]),a("div",{staticClass:"easy"},[t._m(1),a("div",t._l(t.data.tag_list,(function(e,i){return a("van-tag",{key:i,staticStyle:{background:"#2b4cfd","margin-bottom":"5px"},attrs:{size:"medium",round:"",type:"primary"}},[t._v(t._s(e))])})),1)]),a("div",{staticClass:"easy"},[t._m(2),a("div",[t._v(t._s(t.data.self_intro))])]),a("div",{staticClass:"easy"},[t._m(3),a("div",[t._v(t._s(t.data.family_info))])]),a("div",{staticClass:"easy"},[t._m(4),a("div",[t._v(t._s(t.data.friend_condition))])]),a("div",{staticClass:"btm_btn"},[a("span",{staticStyle:{background:"linear-gradient(to left, #A07AeC, #6A47FB)"},on:{click:t.goShare}},[t._v("分 享")]),a("span",{staticStyle:{background:"linear-gradient(to left,#FF88A6, #FF6994 )"},on:{click:t.showPopup}},[t._v("想认识")]),a("div",{staticClass:"button-group"})]),a("van-popup",{staticClass:"wantTo",staticStyle:{height:"30%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},t._l(t.data.wechat_img,(function(t,e){return a("div",{key:e,staticClass:"qr-code"},[a("img",{staticClass:"qr-code-img",attrs:{src:t,alt:""}})])})),0)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"is_approve"},[i("img",{attrs:{src:a("eed7"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("a",{staticClass:"titBorder"}),t._v("个人标签：")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("a",{staticClass:"titBorder"}),t._v("个人介绍：")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("a",{staticClass:"titBorder"}),t._v("家庭背景：")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("a",{staticClass:"titBorder"}),t._v("择偶标准：")])}],s=a("16c6"),c=a("fd03"),r=a("d399"),o={name:"detailed",data:function(){return{preview:!1,index:0,images:["https://img.yzcdn.cn/2.jpg","https://img.yzcdn.cn/2.jpg"],data:{},show:!1,wechat_img:["http://cdn.anheqiaobei.com/11"]}},methods:{goShare:function(){Object(s["a"])({desc:"安和桥北",title:"安和桥北",imgUrl:this.images[0],link:"http://love.anheqiaobei.com/#/detailed?id="+this.$route.query.id}).then((function(){Object(r["a"])("点击右上角去分享")})).catch((function(t){Object(r["a"])("分享失败")}))},onChange:function(t){this.index=t},goPreview:function(){this.preview=!0},showPopup:function(){this.show=!0}},mounted:function(){var t=this;Object(c["d"])(this.$route.query.id).then((function(e){t.data=e.data,t.images=e.data.self_img}))}},l=o,u=(a("8d0f"),a("2877")),d=Object(u["a"])(l,i,n,!1,null,"2c939b8e",null);e["default"]=d.exports},eed7:function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-9912606c.c468af76.js.map