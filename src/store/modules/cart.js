import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
  totalItems: 10,
  totalCogs: 500000
})

const getters = {
  totalItemsInCart: (state) => {
    return formatPrice(state.totalItems.toString())
  },
  totalCartCogs: state => {
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
