const getDefaultOrderState = () => {
  return {
    orderID: ''
  }
}

const state = getDefaultOrderState()

const getters = {}

const actions = {}

const mutations = {
  changeOrderID (state, payload) {
    state.orderID = payload.value
  },
  resetState (state) {
    Object.assign(state, getDefaultOrderState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
