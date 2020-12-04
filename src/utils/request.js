import axios from 'axios'
import store from '@/store'
import router from '@/router'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 将 token 加入请求头
    config.headers.token = store.getters.token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 40100 token 过期
    if (response.data && response.data.code === 40100) {
      // 清除登录状态,重新登录
      store.dispatch('clear_loginInfo')
      router.push('/login')
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
