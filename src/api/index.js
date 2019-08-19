import request from '@/util/request'

// 获取轮播图
export function getBannerApi () {
  return request({
    url: '/api/watch/mall/services/get/carouselMap',
    method: 'get'
  })
}
