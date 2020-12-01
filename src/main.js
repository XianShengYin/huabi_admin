import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './router/permission' // 路由守卫, 权限控制
import './styles/index.scss' // 全局样式
import './icons' // svg图标

Vue.config.productionTip = false

console.log('process.env', process.env)

// https://blog.csdn.net/a8725585/article/details/99433158   完整eslint配置

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
