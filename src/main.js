import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './router/permission' // routing guard
import './styles/index.scss' // global style

Vue.config.productionTip = false

console.log('process.env', process.env)

// 获取mockList目录下的所有文件 require.context(检索目录, 是否检索子目录, 匹配文件的正则表达式)
// const files = require.context('../mock/mockList', false, /\.js$/)

// https://blog.csdn.net/a8725585/article/details/99433158   完整eslint配置

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
