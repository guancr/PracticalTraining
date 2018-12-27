import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
import store from './store/index'
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
