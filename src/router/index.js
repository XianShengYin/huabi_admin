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

path: '/login', //路由路径  '/'表示根目录
name: 'login', //路由名称
component: Layout, // 使用自定义组件显示页面
hidden: true, // 不显示在侧边栏中
children: [] // 子路由
*/

/*
我的 - 密码, 头像, 座右铭, 简介
动态 - 各类型博文, 统计数据
评论 - 各博文评论, 评论操作
日历 - 节日, 事件
笔记 - 设计一个快捷记录访问URL, 分类, 分级标记
云盘 - 上传文件管理, 分享
设置 - 系统设置
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
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/myself',
    component: Layout,
    redirect: '/myself/index',
    meta: { title: '我的', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'myself',
        component: () => import(/* webpackChunkName: "myself" */ '@/views/myself/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/post',
    component: Layout,
    redirect: '/post/index',
    meta: { title: '动态', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'post',
        component: () => import(/* webpackChunkName: "post" */ '@/views/post/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    redirect: '/comment/index',
    meta: { title: '评论', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'comment',
        component: () => import(/* webpackChunkName: "comment" */ '@/views/comment/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/calendar',
    component: Layout,
    redirect: '/calendar/index',
    meta: { title: '日历', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "calendar" */ '@/views/calendar/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/note',
    component: Layout,
    redirect: '/note/index',
    meta: { title: '笔记', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'note',
        component: () => import(/* webpackChunkName: "note" */ '@/views/note/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/cloudStorage',
    component: Layout,
    redirect: '/cloudStorage/index',
    meta: { title: '云盘', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'cloudStorage',
        component: () => import(/* webpackChunkName: "cloudStorage" */ '@/views/cloudStorage/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    meta: { title: '设置', icon: 'setting' },
    children: [
      {
        path: 'sysConfig',
        name: 'sysConfig',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/sysConfig/index'),
        meta: { title: '系统设置', icon: 'setting' }
      },
      {
        path: 'log',
        name: 'log',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/log/index'),
        meta: { title: '系统日志', icon: 'setting' }
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error/404'),
    hidden: true
  }
]

console.log('路由', routes)

// 生成菜单,放在store中

const router = new VueRouter({
  routes
})

export default router
