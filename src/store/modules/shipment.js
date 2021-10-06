import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
  shipmentChoices: [
    {
      label: 'GO-SEND',
      price: 15000,
      formattedPrice: formatPrice('15000'),
      durationInDays: 0
    },
    {
      label: 'JNE',
      price: 9000,
      formattedPrice: formatPrice('9000'),
      durationInDays: 2
    },
    {
      label: 'Personal Courier',
      price: 29000,
      formattedPrice: formatPrice('29000'),
      durationInDays: 1
    }
  ],
  chosenShipment: {}
})

const getters = {}

const actions = {}

const mutations = {
  changeShipment (state, payload) {
    state.chosenShipment = payload.formValue
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
