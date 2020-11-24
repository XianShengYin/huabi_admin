import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// processing menu data
function menuFilter(menuItems) {
  return menuItems.filter(item => {
    return !item.hidden
  }).map(v => {
    return { path: v.path, title: v.title || '', children: menuFilter(v.children || []) }
  })
}

export default new Vuex.Store({
  state: {
    menuItems: [], // 菜单数据
    userInfo: {} // 用户数据
  },
  getters: {
    menuItems: state => state.menuItems
  },
  // 同步事务
  mutations: {
    // 设置菜单数据
    SET_MENUITEMS: (state, menuItems) => {
      if (Array.isArray(menuItems)) {
        state.menuItems = menuFilter(menuItems)
      }
    },
    // 设置用户数据
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  // 异步事务
  actions: {
    // 设置菜单数据
    setMenuItems: ({ commit }, menuItems) => {
      commit('SET_MENUITEMS', menuItems)
    }
  }
})
