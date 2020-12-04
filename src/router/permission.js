import router from '@/router'
import store from '@/store'

// 路由白名单
const whiteList = ['/login']

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 跳转路由不在白名单
  if (whiteList.indexOf(to.path) === -1) {
    // 用户是否授权
    if ('name' in store.getters.userInfo && store.getters.token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 全局后置守卫
router.afterEach(() => {

})
