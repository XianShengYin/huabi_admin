import request from '@/utils/request'

// 请求地址前缀
const prefix = process.env.NODE_ENV === 'development' ? '/mock' : ''

export function blogs() {
  return request({ url: `${prefix}/api/blogs`, method: 'get' })
}

export function blogTypes() {
  return request({ url: `${prefix}/api/blogTypes`, method: 'get' })
}
