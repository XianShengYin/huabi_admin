import request from '@/utils/request'

// request address prefix
// const prefix = process.env.NODE_ENV === 'development' ? '/mock' : ''

export function blogs() {
  return request({ url: '/api/blogs', method: 'get' })
}

export function blogTypes() {
  return request({ url: '/api/blogTypes', method: 'get' })
}

export function login(data) {
  return request({ url: '/api/login', method: 'post', data })
}
