import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Table from '@/components/table'
import pie from '@/components/echart'

Vue.use(Router)

export default new Router({
  // 路由重定向，自动返回login
  routes: [
    {path: '/', redirect: 'login'},
    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home'),
      children: [{
        path: '/table',
        name: 'table',
        component: Table
      },
      {
        path: '/pie',
        name: 'pie',
        component: pie
      }]
    }
  ]
})
