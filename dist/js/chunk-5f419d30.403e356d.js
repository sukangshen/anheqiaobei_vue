(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f419d30"],{"0b6e":function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"workDetail"},[a("div",{staticClass:"userMsg"},[a("div",{staticClass:"workLeft"},[a("p",[t._v("已经汇聚BAT、华为、平安科技、中国移动等名企数十万用户")]),a("span",[t._v("认证方式: 在校学生"),a("van-icon",{attrs:{name:"edit"},on:{click:function(n){return t.$router.go(-1)}}})],1)]),t._m(0)]),a("div",{staticStyle:{width:"100%",height:"0.18rem",background:"#f0f0f0"}}),a("van-divider",[t._v("在校学生")]),a("div",{staticClass:"workBtm"},[a("span",[t._v("\n            请上传学生证照片\n        ")]),a("img",{attrs:{src:t.img_src,alt:""}}),a("van-uploader",{staticStyle:{position:"absolute",top:"0",left:"0",opacity:"0","z-index":"9"},attrs:{"after-read":t.afterRead}})],1),a("div",{staticClass:"sub",on:{click:t.submit}},[t._v("\n        确认提交\n    ")])],1)},s=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"workRight"},[i("img",{attrs:{src:a("c34b"),alt:""}}),i("p",[t._v("实名认证")])])}],e=a("fd03"),c=a("d399"),o={data:function(){return{img_src:"",img:""}},methods:{afterRead:function(t){var n=this;this.img_src=t.content;var a=new FormData;a.append("image",t.file),Object(e["h"])(a).then((function(t){console.log(t.data.img_url),n.img=t.data.img_url}))},submit:function(){var t=this;Object(e["l"])({image:this.img}).then((function(n){n.status&&(Object(c["a"])("提交成功，请耐心等待审核"),setTimeout((function(){t.$router.go(-2)}),1e3))}))}},mounted:function(){}},r=o,u=(a("b5a1"),a("943d"),a("2877")),A=Object(u["a"])(r,i,s,!1,null,"3a2a6e65",null);n["default"]=A.exports},"943d":function(t,n,a){"use strict";var i=a("c712"),s=a.n(i);s.a},b5a1:function(t,n,a){"use strict";var i=a("deef"),s=a.n(i);s.a},c34b:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABACAYAAACNx/A2AAAAAXNSR0IArs4c6QAABXFJREFUeAHtm1uoFVUYx89Oy1N00ewGhRBdTCsQUZKKJCvoQveLiW9B5YNPFb1FFgk9RFD00AV8TI3ThZQKghDKKLKiwkwFOxw1MUrk7OjYSc/u95e9Zc4we2Z9a9bs3RnWB39m1sx3W/89s2bNN2sPDPRJWq3WXLAVjINjnpDtl+CKPnWjf2Hp9OcglGztV08a/QoMc2PEHgwUf7zRaMwI5Mvk5iSTdljlaQHdhfRlSqufBJoS/b8qRwJL/jLTO/aMSXPZvxKcONY5F2i7n3GqJ4M9fbmWnC8KlHfazVEObKcvO4+fINggGAJVywfJTAg2FjDgPynf7wX03c2VOBvU1fYMuD+ZQEX756f8bqN9feqYb1O+knJeslHRvjjb3YDFn9mZV1GQpFtNW+Zw6f+hg8S9nM06sBj4PkWPYSvyHuncUvidTXsEnAaqlp0i8DBRzqo6Utv/JrbL6azIDC70RfPKDeDu4M6zHTZ7TaDS2AXWt7cTOhBANJvQFb2ivQ3g0slFXwh0ymyKKDXjPLDkLxUJjASWZKCkebwCI4ElGShpHq/AkgSGKhwMk8dP4BA4FywEF4DaS1kCN8PQGt4svk0yxRuBKt1LwVqgykhtxfcW/hdGHoO4O9PkiSmOtcAWdlUseA7UVnwJXAVBbxWx0iZyDXovFOlO1fM+78JDEPOgpcPtW/prbFR5qZN4vQvPg8BfrCxA4m3YfGS1S+l/T3sIKL5KWVWIKtnLwH0Ozpuqyx0GrvKjg9NMFQJMB4dcA2XovSIfmc4rOEisu8DRjDySh0atY6BuQy/hqtW3hElPa4OjH9B9su3DYOavSqwPsX65yIOVwN+LHBacP1hwvtvp93tJXiKJdxL7mbtWAs/I9OJ+8Ex31Umav01q9a5RGNdKoKq+ZeQyT+MFnnZlzYrjMiJaHiJH0D/dJyvsLk2Ovsb9JvoX+8T1tSHeNPBVQZ7mh4gW8Kz2TOopTzuZ6Uf7hM5cU8KHsylx9An2XVAYz2ciPYrjxQzq+jjkJCR0HYpbQIhpyDB+qp4Huq7Q8JpIk/+AljXcAol71cgTyLua858C/ap1E++PSlpH8w3k6Ot8pnBOY8ijnNR6mDqSd7zfPrdwmjDVATVe6C2lUw9cxP4D4BJQZ/G+hUWKxqEdQHOlSYt7aEtUE5wN9G65BPRiqQVheipN66Auol4DbxofIqdicwd4FlwFaiOWW3gbvX4I4n717T1joibuT4AXge+CIt/wVdg5P0RUhrqhDHnKHvsJ8BK7WvyjqvaUF5crcDu9XELH/wrZW67Gx/H3uqfPMeysC5M0BmtcDimF9cAJOrowZMSkL3x/DFxFK1qfBnOSPlz3sZsJ7gF7QCgZLSqoaq1dZUIvFjj2RD/kshCJ4EdEjjjGLVIrJPDWEEnn+SDD74qy5PzGPB/Wc/hb6RDTRSW3mPA3iX1mTc5Df7ODzRcOOhaVYP7y6oHDPDjGLVl56roUJU729N3NLJi/PAIPdIse+LhLnJsCx7w5lL88Ans10c3LodPP2xmQHu40ymzxo6f42jI+krZ5r3KLFIzbeCRpUMH+vY4+3yYf1RU1M9B7uPW78IXY3AieB7NAECmaSO8jin6tTRC5P0hEnEDEKWxUYFgFtLJ+qoqpGqP/k+wF2h4BugIEvRG0QJbo9tRQIOhq11e9c4Buo14NEYSqTEzVmJmkIURJMOAygCfU426agUhgmhFjOxJoJCytHglMM2JsRwKNhKXVI4FpRoztSKCRsLS6COw2CU7rxnYGAyJQbxdR/BgYEYHr/WyjlbhTMUHvqK8CvdiH/mqFy9rKG/Rs9QnCIPJsDswHeSWu2rJh6JgWy++gOvWnbP4DB/TwFmOl6I4AAAAASUVORK5CYII="},c712:function(t,n,a){},deef:function(t,n,a){}}]);
//# sourceMappingURL=chunk-5f419d30.403e356d.js.map