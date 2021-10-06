import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
  totalItems: 10,
  totalCogs: 500000,
  paymentChoices: []
})

const getters = {
  formattedTotalItems: state => {
    return formatPrice(state.totalItems.toString())
  },
  formattedTotalCogs: state => {
    return formatPrice(state.totalCogs.toString())
  }
}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
