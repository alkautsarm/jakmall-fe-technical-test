import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import delivery from './modules/delivery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    delivery
  },
  plugins: [createPersistedState()]
})
