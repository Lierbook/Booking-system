import request from '@/utils/request'

export function getpersonalCenterList(params) {
  return request({
    url: '/vue-admin-template/personalCenter/list',
    method: 'get',
    params
  })
}
