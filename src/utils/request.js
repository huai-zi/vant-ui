import { getOpenId } from '@/utils/auth';
import { AjaxPlugin } from 'vux';
import router from '@/router';
import store from '@/store';

// request拦截器,只要有请求,则进行loading动画
AjaxPlugin.$http.interceptors.request.use(config => {
	store.dispatch('showLoading');
	let openId = getOpenId();
	if(openId){
		config.headers['openId'] = openId;
	}else{
		console.log("用户的openId为空");
	}
	config.headers['from'] = '1';
	config.headers['version'] = 'v0.8';
	return config;
}, error => {
	store.dispatch('hideLoading');
	console.log('数据请求错误');
	Promise.reject(error);
});

// respone拦截器
AjaxPlugin.$http.interceptors.response.use(
	response => {
		store.dispatch('hideLoading');
		if(response.data.code == 1101){
			router.push({name:'userRegister'});
		}
		return response;
	},
	error => {
		store.dispatch('hideLoading');
		if (error.response) {
			
        }
		return Promise.reject(error);
	}
)

export default AjaxPlugin;

