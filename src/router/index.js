import Vue from 'vue'
import Router from 'vue-router';
import store from '@/store';
Vue.use(Router)
//进行路由的懒加载过程
const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login.vue'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/404',
      name: '404',
      component: resolve => require(['../pages/404/404.vue'], resolve),
      meta: {
        title: '404'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../pages/index.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      redirect: '/index',
      path: "/"
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  store.dispatch('showLoading')
  next()
})

router.afterEach(() => {
  store.dispatch('hideLoading');
})

export default router;
