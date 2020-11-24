import router from '@/router'
import store from '@/store'

// routing whitelist
const whiteList = ['/login']

// global front guard
router.beforeEach((to, from, next) => {
  // Not in the whitelist
  if (whiteList.indexOf(to.path) === -1) {
    // No login information
    if (!store.getters.userInfo.token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

// global post guard
router.afterEach(() => {

})
