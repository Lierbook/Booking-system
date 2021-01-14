import request from '@/utils/request'

export function getDomesticList(params) {
  return request({
    url: '/vue-admin-template/domestic/list',
    method: 'get',
    params
  })
}
