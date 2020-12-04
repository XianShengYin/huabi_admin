import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 处理菜单数据
function menuFilter(menuItems) {
  return menuItems.filter(item => {
    return !item.hidden
  }).map(v => {
    return { path: v.path, title: v.title || '', children: menuFilter(v.children || []) }
  })
}

export default new Vuex.Store({
  state: {
    menuItems: [], // 菜单
    userInfo: {}, // 用户信息
    token: '' // 用户授权凭证
  },
  getters: {
    menuItems: state => state.menuItems,
    userInfo: state => state.userInfo,
    token: state => state.token
  },
  // 同步事务
  mutations: {
    // 保存菜单数据
    SET_MENUITEMS: (state, menuItems) => {
      if (Array.isArray(menuItems)) {
        state.menuItems = menuFilter(menuItems)
      }
    },
    // 保存用户信息
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    // 保存用户授权凭证
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // 登录后保存用户相关信息
    LOGIN: (state, data) => {
      state.userInfo = data.userInfo
      state.token = data.token
    },
    // 清除登录信息
    CLEAR_LOGININFO: (state) => {
      state.userInfo = {}
      state.token = ''
    }
  },
  // 异步事务
  actions: {
    // 保存菜单数据
    setMenuItems: ({ commit }, menuItems) => {
      commit('SET_MENUITEMS', menuItems)
    },
    // 保存用户信息
    setUserInfo: ({ commit }, userInfo) => {
      commit('SET_USERINFO', userInfo)
    },
    // 保存用户授权凭证
    setToken: ({ commit }, token) => {
      commit('SET_TOKEN', token)
    },
    // 清除登录信息
    clear_loginInfo: ({ commit }) => {
      commit('CLEAR_LOGININFO')
    }
  }
})
