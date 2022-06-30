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
    path: '/posts',
    name: 'posts',
    component: ()=>import('../views/posts.vue')
  },{
    path: '/Qianming',
    name: 'Qianming',
    component: ()=>import('../views/Qianming.vue')
  },{
    path: '/catalog', //分类专栏
    name: 'Catalog',
    component: ()=>import('../views/Catalog.vue')
  },{
    path: '/Admin', //后端
    name: 'Login',
    component: ()=>import('../views/admin/Login.vue')
  },{
    path: '/Admin/Index', //后端
    name: 'Admin',
    component: ()=>import('../views/admin/Index.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
