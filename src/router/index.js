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
    path: '/MdView',
    name: 'MdView',
    component: ()=>import('../views/MdView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
