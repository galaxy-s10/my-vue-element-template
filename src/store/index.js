import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import app from './modules/app'


Vue.use(Vuex)

const store = new Vuex.Store({
    // namespaced:true,
    modules: {
        app,
        auth
    },

})

export default store