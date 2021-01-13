import request from '@/utils/request'
export function getProductList(params) {
  return request({
    url: '/vue-admin-template/abroad/list',
    method: 'get',
    params
  })
}

export function deleteProduct(params) {
  return request({
    url: '/vue-admin-template/product/delete/',
    method: 'get',
    params
  })
}
