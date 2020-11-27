import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
// Custom layout
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/login/index'),
    // Not displayed in the sidebar
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
    title: 'Myself',
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
    title: 'Post',
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
    title: 'Comment',
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
    title: 'Calendar',
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
    title: 'Note',
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
    title: 'CloudStorage',
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
    title: 'Setting',
    children: [
      {
        path: 'sysConfig',
        name: 'sysConfig',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/sysConfig/index'),
        title: 'SysConfig'
      },
      {
        path: 'log',
        name: 'log',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/log/index'),
        title: 'SysLog'
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error/404'),
    hidden: true
  }
]

// generate menu data
store.dispatch('setMenuItems', routes)

const router = new VueRouter({
  routes
})

export default router
