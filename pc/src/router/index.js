import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入路由组件
import IndexPage from '../containers/pages';

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: IndexPage
  }, {
    path: '*',
    redirect: '/index'
  }]
})

export default router;
