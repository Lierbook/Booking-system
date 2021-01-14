import request from '@/utils/request'

export function getAbroadList(params) {
  return request({
    url: '/vue-admin-template/abroad/list',
    method: 'get',
    params
  })
}
