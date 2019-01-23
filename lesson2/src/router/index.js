import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoHome from '@/components/GoHome'
import Make from '@/components/make'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    component: HelloWorld
  },{
    path: '/make',
    component: Make
  },{
    path: '/gohome',
    component: GoHome
  }, {
    path: '*',
    redirect: '/gohome'
  }]
})
