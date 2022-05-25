// 封装后台接口方法
import { get, post, put, del, uploader } from './http'
//登录
export const request_login = (params) => post('/sysadmin/base/user/signIn', params)
//注册
export const request_signUp = (params) => post('/sysadmin/base/user/signUp', params)
//注册
export const request_se = (params) => post('/sysadmin/base/user/sign', params)



//角色管理
//添加角色
export const request_rule_addRole = (params) => post('/sysadmin/base/role/addRole', params)
//查询角色
export const request_rule_getRoleList = (params) => post('/sysadmin/base/role/getRoleList', params)
//给角色添加资源
export const request_resource_roleAddResource = (parent)=>post('/sysadmin/base/RoleResource/roleAddResource',parent);
//查询角色拥有的资源id
export const request_resource_queryRuleResource = (parent)=>post('/sysadmin/base/RoleResource/queryRuleResource',parent);
//删除角色
export const request_rule_deleted = (parent)=>post('/sysadmin/base/role/deleted',parent);



//资源管理
//资源列表
export const request_resource_getResourceList = (params) => post('/sysadmin/base/Resource/getResourceList', params)
//添加资源
export const request_resource_saveOrUpdate = (params) => post('/sysadmin/base/Resource/saveOrUpdate', params)
//删除资源
export const request_resource_deletedById = (parent)=>post('/sysadmin/base/Resource/deletedById',parent);
//移动资源顺序
export const request_resource_mobileData = (parent)=>post('/sysadmin/base/Resource/mobileData',parent);
//查询某个资源下的所有资源
export const request_resource_getSubset = (parent)=>post('/sysadmin/base/Resource/getSubset',parent);










export const USER_LIST = (params) => post('service-core/user_list', params)
export const USER_LIST_ID = (params) => get(`service-core/user_list/${params.id}`)
export const UPLOAD_USER_CARD = (params) => uploader('service-core/user_upload_card', params)
export const DELETE_BOOK = (params) => del(`service-core/book_list/${params.id}`)