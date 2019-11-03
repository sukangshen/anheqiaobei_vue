import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:'/about',
      children:[
        {
          path: '/information',
          name: 'information',
          component: () => import(/* webpackChunkName: "information" */ '@/views/Information.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import( '@/views/About.vue')
        },
        {
          path: '/release',
          name: 'release',
          component: () => import('@/views/Release.vue')
        },
      ]
    },
    {
      path: '/detailed',
      name: 'detailed',
      component: () => import('@/views/Detailed.vue')
    },
    {
      path: '/myRelease',
      name: 'myRelease',
      component: () => import('@/views/MyRelease.vue')
    },
    
  ]
})
