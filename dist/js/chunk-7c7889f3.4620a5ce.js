(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c7889f3"],{"16c6":function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));t("6b54"),t("b54a"),t("28a5");var i=t("fd03"),r=t("18a0"),c=t.n(r),a=t("d399");function o(n){return alert("请求数据"+JSON.stringify(n)),new Promise((function(e,t){var r=encodeURIComponent(window.location.href.split("#")[0]);Object(i["f"])({url:r}).then((function(t){alert("返回请求数据"+JSON.stringify(t)),c.a.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]});var i={imgUrl:n.imgUrl,desc:n.desc,title:n.title,link:n.link,success:function(){Object(a["a"])("分享成功！")},cancel:function(){Object(a["a"])("已取消分享！")}};c.a.ready((function(){c.a.onMenuShareTimeline(i),c.a.onMenuShareAppMessage(i)})),e(t)})).catch((function(n){console.log(n),t(n)})),c.a.error((function(n){console.log(n),t(n),Object(a["a"])(n.errMsg.toString())}))}))}},"28a5":function(n,e,t){"use strict";var i=t("aae3"),r=t("cb7c"),c=t("ebd6"),a=t("0390"),o=t("9def"),u=t("5f1b"),l=t("520a"),s=t("79e5"),f=Math.min,g=[].push,d="split",h="length",p="lastIndex",b=4294967295,v=!s((function(){RegExp(b,"y")}));t("214f")("split",2,(function(n,e,t,s){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[h]||2!="ab"[d](/(?:ab)*/)[h]||4!="."[d](/(.?)(.?)/)[h]||"."[d](/()()/)[h]>1||""[d](/.?/)[h]?function(n,e){var r=String(this);if(void 0===n&&0===e)return[];if(!i(n))return t.call(r,n,e);var c,a,o,u=[],s=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),f=0,d=void 0===e?b:e>>>0,v=new RegExp(n.source,s+"g");while(c=l.call(v,r)){if(a=v[p],a>f&&(u.push(r.slice(f,c.index)),c[h]>1&&c.index<r[h]&&g.apply(u,c.slice(1)),o=c[0][h],f=a,u[h]>=d))break;v[p]===c.index&&v[p]++}return f===r[h]?!o&&v.test("")||u.push(""):u.push(r.slice(f)),u[h]>d?u.slice(0,d):u}:"0"[d](void 0,0)[h]?function(n,e){return void 0===n&&0===e?[]:t.call(this,n,e)}:t,[function(t,i){var r=n(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,r,i):m.call(String(r),t,i)},function(n,e){var i=s(m,n,this,e,m!==t);if(i.done)return i.value;var l=r(n),g=String(this),d=c(l,RegExp),h=l.unicode,p=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),S=new d(v?l:"^(?:"+l.source+")",p),w=void 0===e?b:e>>>0;if(0===w)return[];if(0===g.length)return null===u(S,g)?[g]:[];var x=0,k=0,y=[];while(k<g.length){S.lastIndex=v?k:0;var j,M=u(S,v?g:g.slice(k));if(null===M||(j=f(o(S.lastIndex+(v?0:k)),g.length))===x)k=a(g,k,h);else{if(y.push(g.slice(x,k)),y.length===w)return y;for(var O=1;O<=M.length-1;O++)if(y.push(M[O]),y.length===w)return y;k=x=j}}return y.push(g.slice(x)),y}]}))},3846:function(n,e,t){t("9e1e")&&"g"!=/./g.flags&&t("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:t("0bfb")})},"386b":function(n,e,t){var i=t("5ca1"),r=t("79e5"),c=t("be13"),a=/"/g,o=function(n,e,t,i){var r=String(c(n)),o="<"+e;return""!==t&&(o+=" "+t+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(o),i(i.P+i.F*r((function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",t)}},"6b54":function(n,e,t){"use strict";t("3846");var i=t("cb7c"),r=t("0bfb"),c=t("9e1e"),a="toString",o=/./[a],u=function(n){t("2aba")(RegExp.prototype,a,n,!0)};t("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?u((function(){var n=i(this);return"/".concat(n.source,"/","flags"in n?n.flags:!c&&n instanceof RegExp?r.call(n):void 0)})):o.name!=a&&u((function(){return o.call(this)}))},b54a:function(n,e,t){"use strict";t("386b")("link",(function(n){return function(e){return n(this,"a","href",e)}}))},c0b3:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo"},[t("button",{on:{click:n.share}},[n._v("分享")])])},r=[],c=t("16c6"),a={methods:{share:function(){Object(c["a"])({desc:"安和桥北",title:"安和桥北",imgUrl:"http://cdn.anheqiaobei.com/c635ee9b4fdad4cb333aba5c7279a046.jpeg",link:"http://love.anheqiaobei.com"}).then((function(){console.log(1)})).catch((function(n){console.log("----"+n)}))}}},o=a,u=t("2877"),l=Object(u["a"])(o,i,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7c7889f3.4620a5ce.js.map