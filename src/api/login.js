import api from './commonURL.js';
import AjaxPlugin from '@/utils/request'


export function loginByUsername() {
	return AjaxPlugin.$http.post(
		api.index.weather
	);
}
