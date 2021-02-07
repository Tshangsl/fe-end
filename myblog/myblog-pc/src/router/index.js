import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/blog/detail/:blog_id',
    name: 'blogdetail',
    component: () => import('../views/blogDetail.vue')
  },
  {
    path: '/blog/post',
    name: 'postBlog',
    component: () => import('../views/postBlog.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
