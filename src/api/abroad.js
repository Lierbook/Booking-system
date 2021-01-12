import request from '@/utils/request'

export function getAbroadList(params) {
    return request({
        url: '/vue-admin-template/abroad/list',
        method: 'get',
        params
    })
}

export function getAbroadDelete(params) {
    return request({
        url: '/vue-admin-template/abroad/delete',
        method: 'get',
        params
    })
}