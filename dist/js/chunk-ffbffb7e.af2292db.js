(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffbffb7e"],{"724c":function(n,e,t){var i=t("2498"),c=t("0cc1"),r=t("3038"),a=/"/g,o=function(n,e,t,i){var c=String(r(n)),o="<"+e;return""!==t&&(o+=" "+t+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+c+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(o),i(i.P+i.F*c((function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",t)}},"9f7e":function(n,e,t){t("f9a5")&&"g"!=/./g.flags&&t("d3d8").f(RegExp.prototype,"flags",{configurable:!0,get:t("e7a1")})},c0b3:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo"},[t("button",{on:{click:n.share}},[n._v("分享")])])},c=[],r=(t("cc1d"),t("eb2e"),t("e6d1"),t("fd03")),a=t("00ca"),o=t.n(a),u=t("6b4e");function l(n){return alert("请求数据"+JSON.stringify(n)),new Promise((function(e,t){var i=encodeURIComponent(window.location.href.split("#")[0]);Object(r["f"])({url:i}).then((function(t){alert("返回请求数据"+JSON.stringify(t)),o.a.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]});var i={imgUrl:n.imgUrl,desc:n.desc,title:n.title,link:n.link,success:function(){Object(u["a"])("分享成功！")},cancel:function(){Object(u["a"])("已取消分享！")}};o.a.ready((function(){o.a.onMenuShareTimeline(i),o.a.onMenuShareAppMessage(i)})),e(t)})).catch((function(n){console.log(n),t(n)})),o.a.error((function(n){console.log(n),t(n),Object(u["a"])(n.errMsg.toString())}))}))}var s={methods:{share:function(){l({desc:"安和桥北",title:"安和桥北",imgUrl:"http://cdn.anheqiaobei.com/c635ee9b4fdad4cb333aba5c7279a046.jpeg",link:"http://love.anheqiaobei.com"}).then((function(){console.log(1)})).catch((function(n){console.log("----"+n)}))}}},f=s,g=t("6691"),d=Object(g["a"])(f,i,c,!1,null,null,null);e["default"]=d.exports},cc1d:function(n,e,t){"use strict";t("9f7e");var i=t("8cac"),c=t("e7a1"),r=t("f9a5"),a="toString",o=/./[a],u=function(n){t("a6d5")(RegExp.prototype,a,n,!0)};t("0cc1")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?u((function(){var n=i(this);return"/".concat(n.source,"/","flags"in n?n.flags:!r&&n instanceof RegExp?c.call(n):void 0)})):o.name!=a&&u((function(){return o.call(this)}))},e6d1:function(n,e,t){"use strict";var i=t("5f9c"),c=t("8cac"),r=t("95e3"),a=t("ff04"),o=t("8941"),u=t("2137"),l=t("133b"),s=t("0cc1"),f=Math.min,g=[].push,d="split",h="length",p="lastIndex",v=4294967295,b=!s((function(){RegExp(v,"y")}));t("6af6")("split",2,(function(n,e,t,s){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[h]||2!="ab"[d](/(?:ab)*/)[h]||4!="."[d](/(.?)(.?)/)[h]||"."[d](/()()/)[h]>1||""[d](/.?/)[h]?function(n,e){var c=String(this);if(void 0===n&&0===e)return[];if(!i(n))return t.call(c,n,e);var r,a,o,u=[],s=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),f=0,d=void 0===e?v:e>>>0,b=new RegExp(n.source,s+"g");while(r=l.call(b,c)){if(a=b[p],a>f&&(u.push(c.slice(f,r.index)),r[h]>1&&r.index<c[h]&&g.apply(u,r.slice(1)),o=r[0][h],f=a,u[h]>=d))break;b[p]===r.index&&b[p]++}return f===c[h]?!o&&b.test("")||u.push(""):u.push(c.slice(f)),u[h]>d?u.slice(0,d):u}:"0"[d](void 0,0)[h]?function(n,e){return void 0===n&&0===e?[]:t.call(this,n,e)}:t,[function(t,i){var c=n(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,c,i):m.call(String(c),t,i)},function(n,e){var i=s(m,n,this,e,m!==t);if(i.done)return i.value;var l=c(n),g=String(this),d=r(l,RegExp),h=l.unicode,p=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),S=new d(b?l:"^(?:"+l.source+")",p),w=void 0===e?v:e>>>0;if(0===w)return[];if(0===g.length)return null===u(S,g)?[g]:[];var x=0,k=0,y=[];while(k<g.length){S.lastIndex=b?k:0;var M,j=u(S,b?g:g.slice(k));if(null===j||(M=f(o(S.lastIndex+(b?0:k)),g.length))===x)k=a(g,k,h);else{if(y.push(g.slice(x,k)),y.length===w)return y;for(var E=1;E<=j.length-1;E++)if(y.push(j[E]),y.length===w)return y;k=x=M}}return y.push(g.slice(x)),y}]}))},eb2e:function(n,e,t){"use strict";t("724c")("link",(function(n){return function(e){return n(this,"a","href",e)}}))}}]);
//# sourceMappingURL=chunk-ffbffb7e.af2292db.js.map