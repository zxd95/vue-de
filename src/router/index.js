import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index/index'
import Detail from '@/views/Detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
