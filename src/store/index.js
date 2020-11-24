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
    menuItems: [], // menu data
    userInfo: {} // user data
  },
  getters: {
    menuItems: state => state.menuItems,
    userInfo: state => state.userInfo
  },
  // Synchronous transaction
  mutations: {
    // add menu data
    SET_MENUITEMS: (state, menuItems) => {
      if (Array.isArray(menuItems)) {
        state.menuItems = menuFilter(menuItems)
      }
    },
    // add user data
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  // Asynchronous transaction
  actions: {
    // add menu data
    setMenuItems: ({ commit }, menuItems) => {
      commit('SET_MENUITEMS', menuItems)
    },
    // add user data
    setUserInfo: ({ commit }, userInfo) => {
      commit('SET_USERINFO', userInfo)
    }
  }
})
