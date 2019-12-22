import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/about',
            children: [{
                    path: '/information',
                    name: 'information',
                    component: () =>
                        import ('@/views/Information.vue')
                },
                // 首页
                {
                    path: '/about',
                    name: 'about',
                    component: () =>
                        import ('@/views/About.vue')
                },
                // 发布
                {
                    path: '/release',
                    name: 'release',
                    component: () =>
                        import ('@/views/Release.vue')
                },
            ]
        },
        // 用户详情页
        {
            path: '/detailed',
            name: 'detailed',
            component: () =>
                import ('@/views/Detailed.vue')
        },
        {
            path: '/demo',
            name: 'demo',
            component: () =>
                import ('@/views/demo.vue')
        },
        // 我的
        {
            path: '/myRelease',
            name: 'myRelease',
            component: () =>
                import ('@/views/MyRelease.vue')
        },
        // 用户认证
        {
            path: '/approve',
            name: 'approve',
            component: () =>
                import ('@/views/approve/index.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () =>
                import ('@/views/approve/user.vue')
        },
        {
            path: '/work',
            name: 'work',
            component: () =>
                import ('@/views/approve/work.vue')
        },
        {
            path: '/workDetail',
            name: 'workDetail',
            component: () =>
                import ('@/views/approve/workDetail.vue')
        },
        // 首页的四个介绍
        {
            path: '/introduce/system',
            name: 'system',
            component: () =>
                import ('@/views/introduce/system.vue')
        },
        {
            path: '/introduce/process',
            name: 'process',
            component: () =>
                import ('@/views/introduce/process.vue')
        },
        {
            path: '/introduce/relevant',
            name: 'relevant',
            component: () =>
                import ('@/views/introduce/relevant.vue')
        },
        {
            path: '/introduce/question',
            name: 'question',
            component: () =>
                import ('@/views/introduce/question.vue')
        }
    ]
})