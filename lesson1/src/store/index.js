import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger'

import app from './models/app'

Vue.use(Vuex);

//生成store实例
export default new Vuex.Store({
    modules: {
        app
    },
    state:{
        a:100,
        b:200
    },
    plugins: [createLogger()]
})

