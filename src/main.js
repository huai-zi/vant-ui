import Vue from 'vue'
import FastClick from 'fastclick'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import {LoadingPlugin, ToastPlugin, AlertPlugin,ConfirmPlugin} from 'vux'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
