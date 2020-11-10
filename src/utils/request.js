import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 判断token
    return config
  },
  error => {
    console.log('request error', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    console.log(response.data)
    return response
  },
  error => {
    console.log('response error', error)
    return Promise.reject(error)
  }
)

export default service
