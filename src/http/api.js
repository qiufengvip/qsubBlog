// 封装后台接口方法
import { get, post, put, del, uploader } from './http'
//登录
export const request_login = (params) => post('/sysadmin/user/signIn', params)
//注册
export const request_signUp = (params) => post('/sysadmin/user/signUp', params)
//注册
export const request_se = (params) => post('/sysadmin/user/sign', params)



//角色管理
//添加角色
export const request_rule_addRole = (params) => post('/sysadmin/base/role/addRole', params)
//查询角色
export const request_rule_getRoleList = (params) => post('/sysadmin/base/role/getRoleList', params)

//资源管理
//资源列表
export const request_resource_getResourceList = (params) => post('/sysadmin/base/Resource/getResourceList', params)
//添加资源
export const request_resource_saveOrUpdate = (params) => post('/sysadmin/base/Resource/saveOrUpdate', params)
//删除资源
export const request_resource_deletedById = (parent)=>post('/sysadmin/base/Resource/deletedById',parent);









export const USER_LIST = (params) => post('service-core/user_list', params)
export const USER_LIST_ID = (params) => get(`service-core/user_list/${params.id}`)
export const UPLOAD_USER_CARD = (params) => uploader('service-core/user_upload_card', params)
export const DELETE_BOOK = (params) => del(`service-core/book_list/${params.id}`)