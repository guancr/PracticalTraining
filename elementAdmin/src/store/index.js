import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import list from './modules/list'
import getters from './getters'

//引入logger
// import createLogger from 'vuex/dist/list'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    user,
    list
  },
  getters
  // plugins:[createLogger()]
})

export default store
