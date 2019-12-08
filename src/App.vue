<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,article,aside,dialog,footer,header,section,footer,nav,figure,menu { 
	margin:0;
  padding:0;
  color: #333
}
ol,ul,li {
	list-style:none;
}
input,button,textarea{
  outline: none;
  border: 0;
}
html,body{
  width: 100%;
//   height: 100%;
  background: #fff;
  -webkit-overflow-scrolling: touch;
	// overflow: auto;
}
.van-toast__text{
  color: #fff
}
.van-swipe__indicator{
  background: #333 !important;
}
.titBorder{
  display:inline-block;width:3px;height:0.3rem;background:#2b4cfd;vertical-align: top;margin-top:0.03rem;border-radius:5px;margin-right:5px
}
</style>
