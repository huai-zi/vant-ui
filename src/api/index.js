import api from './commonURL.js';
import AjaxPlugin from '@/utils/request'

//首页列表数据
export function loginByUsername() {
	return AjaxPlugin.$http.post(
		api.index.lists
	);
}
