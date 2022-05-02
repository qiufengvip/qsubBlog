// 封装后台接口方法
import { get, post, put, del, uploader } from './http'
//登录
export const request_login = (params) => post('/sysadmin/user/signIn', params)
//注册
export const request_signUp = (params) => post('/sysadmin/user/signUp', params)
//注册
export const request_se = (params) => post('/sysadmin/user/sign', params)


export const USER_LIST = (params) => post('service-core/user_list', params)
export const USER_LIST_ID = (params) => get(`service-core/user_list/${params.id}`)
export const UPLOAD_USER_CARD = (params) => uploader('service-core/user_upload_card', params)
export const DELETE_BOOK = (params) => del(`service-core/book_list/${params.id}`)