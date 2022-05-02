import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import('../views/Index.vue')
  },{
    path: '/:catchAll(.*)',
    name: '/404',
    component: ()=>import('../views/404.vue')
  },{
    path: '/Md',
    name: 'Md',
    component: ()=>import('../views/Md.vue')
  },{
    path: '/Article',
    name: 'Article',
    component: ()=>import('../views/Article.vue')
  },{
    path: '/Qianming',
    name: 'Qianming',
    component: ()=>import('../views/Qianming.vue')
  },{
    path: '/catalog', //分类专栏
    name: 'Catalog',
    component: ()=>import('../views/Catalog.vue')
  },{
    path: '/admin', //后端
    name: 'Login',
    component: ()=>import('../views/admin/Login.vue')
  },{
    path: '/admin/index', //后端
    name: 'admin',
    component: ()=>import('../views/admin/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
