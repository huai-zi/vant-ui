const OpenIdKey = 'openId';
const versionKey="version";
const versionValue="20180201";
import { AjaxPlugin } from 'vux';
export function getOpenId() {
  return localStorage.getItem(OpenIdKey);
}

export function setOpenId(openId) {
  return localStorage.setItem(OpenIdKey, openId);
}

export function removeOpenId() {
  return localStorage.removeItem(OpenIdKey);
}

export function queryOpenid(){//获取页面授权用户openid

	if(!localStorage.getItem(versionKey)){
		localStorage.setItem(versionKey,versionValue);
		localStorage.removeItem(OpenIdKey);
	}else{
		let v=localStorage.getItem(versionKey);
		if(v!=versionValue){
			localStorage.removeItem(versionKey);
			localStorage.setItem(versionKey,versionValue);
			localStorage.removeItem(OpenIdKey);
		}
	};

	//返回回调函数，执行过程，进行成功或者失败的过程
	return new Promise(function(resolve,reject){
			let currentUrl=location.href;
			if(localStorage.getItem(OpenIdKey)){
				resolve("成功获取了openid");
			}else{
				AjaxPlugin.$http.post(
						"/wx/oauth/getOpenid?v="+(new Date().getTime()),
						{"url":encodeURIComponent(currentUrl)},
					).then((res)=>{
						if(res.data && res.data.data && res.data.data.openid){
				    	  localStorage.setItem(OpenIdKey,res.data.data.openid);
				    	  resolve("成功获取了openid");
		        }else{
		            location.href=res.data.data.url;
		        }
					});
			}
	});
};
