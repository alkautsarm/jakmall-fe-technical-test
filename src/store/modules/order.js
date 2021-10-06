const state = () => ({
  orderID: ''
})

const getters = {}

const actions = {}

const mutations = {
  changeOrderID (state, payload) {
    state.orderID = payload.value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
