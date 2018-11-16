import api from './commonURL.js';
import AjaxPlugin from '@/utils/request'

//首页列表数据
export function newlist(params) {
  return AjaxPlugin.$http.post(
    api.lists.newLists, JSON.stringify(params)
  );
}
