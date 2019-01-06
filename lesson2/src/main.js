import Vue from 'vue'
import App from './App'

// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

import router from './router'
import store from "@/store/index";

import "@/common/flexible.js"

import "@/scss/style.scss";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
