// 封装后台接口方法
import {get, post, put, del, uploader} from './http'

const API = {
    login: '/sysadmin/base/user/signIn' //登录
    , signUp: '/sysadmin/base/user/signUp' //注册


    //首页
    ,queryRuleResource:    '/sysadmin/base/Resource/getMenuData' //查询用户的菜单


    /**
     * 常量库管理
     */
    , addConstant: '/sysadmin/base/constant/addConstant'                    // 添加常量
    , deleteConstant: '/sysadmin/base/constant/deleteConstant'              // 删除变量
    , selectConstantList: '/sysadmin/base/constant/selectList'                      // 查询变量列表
    , selectConstantData:  '/sysadmin/base/constant/selectConstantData' //查询常量值
    , addConstantData: '/sysadmin/base/constant/data/addConstantData'       // 添加常量值
    , deleteConstantData: '/sysadmin/base/constant/data/deleteConstantData' // 删除变量值


    /**
     * 站点配置管理
     */
    ,  getConfigList:'/sysadmin/blog/blogConfig/getConfigList'// 配置项列表
    ,  updateBlogConfig:'/sysadmin/blog/blogConfig/update'// 添加或更新
    ,  deletedBlogConfig:'/sysadmin/blog/blogConfig/deleted'// 删除配置项
    ,  getConfigData:'/sysadmin/blog/blogConfig/getConfigData'// 获取配置项信息





}


export {API};
/**
 * 登录注册
 */
//登录
export const request_login = (params) => post('/sysadmin/base/user/signIn', params)
//注册
export const request_signUp = (params) => post('/sysadmin/base/user/signUp', params)
//注册
export const request_se = (params) => post('/sysadmin/base/user/sign', params)


/**
 * 角色管理
 */
//添加角色
export const request_rule_addRole = (params) => post('/sysadmin/base/role/addRole', params)
//查询角色
export const request_rule_getRoleList = (params) => post('/sysadmin/base/role/getRoleList', params)
//给角色添加资源
export const request_resource_roleAddResource = (parent) => post('/sysadmin/base/RoleResource/roleAddResource', parent);
//查询角色拥有的资源id
export const request_resource_queryRuleResource = (parent) => post('/sysadmin/base/RoleResource/queryRuleResource', parent);
//删除角色
export const request_rule_deleted = (parent) => post('/sysadmin/base/role/deleted', parent);


/**
 * 资源管理
 */
//资源列表
export const request_resource_getResourceList = (params) => post('/sysadmin/base/Resource/getResourceList', params)
//添加资源
export const request_resource_saveOrUpdate = (params) => post('/sysadmin/base/Resource/saveOrUpdate', params)
//删除资源
export const request_resource_deletedById = (parent) => post('/sysadmin/base/Resource/deletedById', parent);
//移动资源顺序
export const request_resource_mobileData = (parent) => post('/sysadmin/base/Resource/mobileData', parent);
//查询某个资源下的所有资源
export const request_resource_getSubset = (parent) => post('/sysadmin/base/Resource/getSubset', parent);




/**
 * 人员管理
 */
export const request_user_getUserList = (parent) => post('/sysadmin/base/user/getUserList', parent);


/**
 * 角色人员管理
 */
export const request_virtualUserRole_getUserRole = (parent) => post('/sysadmin/base/virtualUserRole/getUserRole', parent);
export const request_virtualUserRole_virtualUserRole = (parent) => post('/sysadmin/base/virtualUserRole/saveUserRole', parent);



export const uploadFile =(parent)=> uploader("/sysadmin/base/sysFile/upload",parent);
