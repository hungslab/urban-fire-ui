import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import * as echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';

Vue.prototype.$echarts = echarts 
console.log(echarts)
Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});
router.beforeEach((to, from, next) => {
 
    // 路由跳转后，让页面回到顶部
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    window.pageYOffset = 0; 
    //next() 放行 next('/login') 强制跳转
    // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁!!
    next();
   
  });

// //使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | vue-manage-system`;
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         } else {
//             next();
//         }
//     }
// });

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
