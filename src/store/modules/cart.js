import formatPrice from '@/utils/priceFormatting.js'

const getDefaultCartState = () => {
  return {
    totalItems: 10,
    totalCogs: 500000
  }
}

const state = getDefaultCartState()

const getters = {
  formattedTotalItems: state => {
    return formatPrice(state.totalItems.toString())
  },
  formattedTotalCogs: state => {
    return formatPrice(state.totalCogs.toString())
  }
}

const actions = {}

const mutations = {
  resetState (state) {
    Object.assign(state, getDefaultCartState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
