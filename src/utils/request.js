import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000 // Request timeout
})

// Request interceptor
service.interceptors.request.use(
  config => {
    // token
    return config
  },
  error => {
    console.log('request error', error)
    return Promise.reject(error)
  }
)

// Response interceptor
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
