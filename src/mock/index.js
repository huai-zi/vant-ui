import Mock from 'mockjs'
import loginAPI from './index'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/sys\/index/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

//



export default Mock
