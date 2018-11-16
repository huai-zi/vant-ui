import Vue from 'vue'
import FastClick from 'fastclick'
// import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import {LoadingPlugin, ToastPlugin, AlertPlugin,ConfirmPlugin} from 'vux'
// Vue.use(MintUI);
import VueTouch from 'vue-touch'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin);
Vue.use(VueTouch, {name: 'v-touch'})

import router from './router'
import store from './store'
import App from './App'

// import './mock'

FastClick.attach(document.body)

Vue.config.productionTip = false

//localStorage.setItem("openId","213332926008");
//localStorage.setItem("version","20180201");//本地测试时打开，上线时要注释
//localStorage.setItem("openId","oBz7x1V39j0i4cKNWIpGAlTlq8VQ");//本地测试时打开，上线时要注释
//localStorage.setItem("openId","oBz7x1d09JvsHYxFb5tp0E8iG60o");//本地测试时打开，上线时要注释

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
