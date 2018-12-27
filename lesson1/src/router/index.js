import Vue from 'vue'
import Router from 'vue-router'
import Gxtj from '@/components/view/gxtj'
import Zbdt from '@/components/view/zbdt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gxtj',
      component: Gxtj
    },{
      path: '/gxtj',
      name: 'Gxtj',
      component: Gxtj
    },{
      path: '/zbdt',
      name: 'Zbdt',
      component: Zbdt
    }
  ]
})
