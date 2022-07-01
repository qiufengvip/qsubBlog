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
    path: '/posts',
    name: 'posts',
    component: ()=>import('../views/posts.vue')
  },{
    path: '/catalog', //分类专栏
    name: 'catalog',
    component: ()=>import('../views/catalog.vue')
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
