import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
      
        {
            path: '/',
            meta: { title: '系统首页' },
            redirect:'/index',
        },
        {
            path: '/404',
            component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
            meta: { title: '404' }
        },
        {
            path: '/403',
            component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
            meta: { title: '403' }
        },
       
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../view/Login.vue'),
            meta: { title: '登录' }
        },
     
        {
            path: '/index',
            component: () => import(/* webpackChunkName: "login" */ '../view/index.vue'),
            meta: { title: '首页' }
        },
        {
            path: '/xfAnli',
            component: () => import(/* webpackChunkName: "login" */ '../view/xfAnli.vue'),
            meta: { title: '消防案例' }
        },
        {
            path: '/xfNews',
            component: () => import(/* webpackChunkName: "login" */ '../view/xfNews.vue'),
            meta: { title: '消防新闻' }
        },
        {
            path: '/xfKnow',
            component: () => import(/* webpackChunkName: "login" */ '../view/xfKnow.vue'),
            meta: { title: '消防知识' }
        },
        {
            path: '/fireYc',
            component: () => import(/* webpackChunkName: "login" */ '../view/fireYc.vue'),
            meta: { title: '火灾预测' }
        },
        {
            path: '/fireData',
            component: () => import(/* webpackChunkName: "login" */ '../view/fireData.vue'),
            meta: { title: '火灾数据' }
        }, {
            path: '/fireAnli',
            component: () => import(/* webpackChunkName: "login" */ '../view/fireAnli.vue'),
            meta: { title: '火灾案例' }
        },
         {
            path: '/my',
            component: () => import(/* webpackChunkName: "login" */ '../view/my.vue'),
            meta: { title: '个人中心' }
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../view/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/register',
            component: () => import(/* webpackChunkName: "login" */ '../view/register.vue'),
            meta: { title: '注册' }
        },
        {
            path: '/anliDetail',
            component: () => import(/* webpackChunkName: "login" */ '../view/anliDetail.vue'),
            meta: { title: '案例详情' }
        },{
            path: '/fireDetail',
            component: () => import(/* webpackChunkName: "login" */ '../view/fireDetail.vue'),
            meta: { title: '火灾详情' }
        },{
            path: '/knowDetail',
            component: () => import(/* webpackChunkName: "login" */ '../view/knowDetail.vue'),
            meta: { title: '知识详情' }
        },{
            path: '/newsDetail',
            component: () => import(/* webpackChunkName: "login" */ '../view/newsDetail.vue'),
            meta: { title: '新闻详情' }
        }
        
        
        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ]
});
