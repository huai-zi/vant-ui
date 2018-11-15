/**
 * Created by guofei on 2018/1/31.
 */
//工具
export const reg_mobile = /^(((13[0-9]{1})|(14[579]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/; //手机号
export const reg_telphone = /^\d{3,4}(\-|\s)\d{3,8}((\-|\s)\d{1,5}){0,1}$/; //验证座机号
export const reg_telphone_input = /^(\d|-|\s)+$/; //验证座机号输入
export const reg_blank = /(^\s*)|(\s*$)/g; //去掉两边空格
export const reg_number = /^[0-9]*$/; //纯数字
