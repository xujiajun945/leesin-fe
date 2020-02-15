import Vue from 'vue'
import Router from 'vue-router'
import XiaMen from '@/components/XiaMen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'XiaMen',
      component: XiaMen
    },
    {
      path: '/chongqing',
      name: 'ChongQing',
      /* 路由的第二种方式 */
      component: () => import('../components/ChongQing')
    }
  ]
})
