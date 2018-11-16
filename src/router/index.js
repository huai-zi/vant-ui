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
      path: '/lists',
      name: 'lists',
      component: resolve => require(['../pages/newlists/newlists.vue'], resolve),
      meta: {
        title: '新闻列表'
      }
    },
    {
      path: '/information',
      name: 'information',
      component: resolve => require(['../pages/newlists/information.vue'], resolve),
      meta: {
        title: '新闻详情'
      }
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: resolve => require(['../pages/datemonitor/monitor.vue'], resolve),
      meta: {
        title: '实时监测'
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
