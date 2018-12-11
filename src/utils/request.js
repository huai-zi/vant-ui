
import {
  AjaxPlugin
} from 'vux';
import router from '@/router';
import store from '@/store';

import {
  Toast
} from 'vant';

// request拦截器,只要有请求,则进行loading动画
AjaxPlugin.$http.interceptors.request.use(config => {
  store.dispatch('showLoading');
  config.headers['openId'] = (new Date()).getTime();
  config.headers['from'] = '1';
  config.headers['version'] = 'v0.1';
  return config;
}, error => {
  store.dispatch('hideLoading');
  // router.push({name:'404'});
  Toast({
    message: '请求失败...',
    position: "top"
  });
  Promise.reject(error);
});

// respone拦截器
AjaxPlugin.$http.interceptors.response.use(
  response => {
    store.dispatch('hideLoading');
    return response;
  },
  error => {
    store.dispatch('hideLoading');
    return Promise.reject(error);
  }
)

export default AjaxPlugin;
