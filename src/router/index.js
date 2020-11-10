import Vue from 'vue'
import VueRouter from 'vue-router'
// 自定义组件页面
import Layout from '@/layout'

Vue.use(VueRouter)

/*
{ path: '/user/:id' }
提供了 path，params 会被忽略
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123

path: '/login', //路由路径
name: 'login', //路由名称
component: Layout, // 使用自定义组件显示页面
hidden: true, // 不显示在侧边栏中,默认false
children: [] // 子路由
*/

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ '@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: true,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index')
      }
    ]
  },
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog',
    meta: { title: '博文', icon: 'home' },
    children: [
      {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "blog" */ '@/views/home/index')
      },
      {
        path: '/blogType',
        name: 'blogType',
        component: () => import(/* webpackChunkName: "blog" */ '@/views/home/index')
      },
      {
        path: '/editBlogType',
        name: 'editBlogType',
        component: () => import(/* webpackChunkName: "blog" */ '@/views/home/index')
      },
      {
        path: '/editBlog',
        name: 'editBlog',
        component: () => import(/* webpackChunkName: "blog" */ '@/views/home/index')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error/404')
  }
]

console.log('路由', routes)

const router = new VueRouter({
  routes
})

export default router
