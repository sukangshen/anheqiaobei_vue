import request from '@/request/http.js'

export function fetchList(data) {
  return request({
    url: '/api/wechat/auth',
    method: 'get',
    params: data
  })
}
export function getList(data) {
  return request({
    url: '/api/wechat/profileSearch',
    method: 'get',
    params: data
  })
}

export function release(data) {
  return request({
    url: '/api/wechat/profileCreate',
    method: 'post',
    data
  })
}

export function imgUpload(data) {
  return request({
    url: '/api/wechat/img',
    method: 'post',
    data
  })
}
