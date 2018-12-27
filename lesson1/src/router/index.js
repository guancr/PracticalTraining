import Vue from 'vue'
import Router from 'vue-router'
import Gxtj from '@/components/view/gxtj'
import Zbdt from '@/components/view/zbdt'
import Indexs from '../components/Inde.vue'
import Audio from '../components/Audio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Indexs',
      component: Indexs
    },{
      path: '/Indexs',
      name: 'Indexs',
      component: Indexs
    },{
      path: '/Audio',
      name: 'Audio',
      component: Audio
    }
  ]
})
