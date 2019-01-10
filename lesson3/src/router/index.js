import Vue from 'vue';
import VueRouter from 'vue-router';
import {getToken} from '../utils/index';
import {goLogin} from '../api/index';

Vue.use(VueRouter);

// 引入路由组件
import IndexPage from '../containers/pages';
import Add from '../containers/add';
import CanvasPage from '../containers/cavas';
import EleUi from '../containers/elemenntui.vue';

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: IndexPage
  },{
    path: '/add',
    component: Add
  },{
    path: '/canvas',
    component: CanvasPage
  },{
    path: '/eleui',
    component: EleUi
  }, {
    path: '*',
    redirect: '/index'
  }]
})

// 跳转之前
router.beforeEach((to, from, next)=>{
  if (getToken()){
    next();
  }else{
    goLogin();
  }
  // next();
})

// 跳转之后
router.afterEach((to, from)=>{

})

export default router;
