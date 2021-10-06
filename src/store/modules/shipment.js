import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
  shipmentChoices: [
    {
      label: 'GO-SEND',
      price: 15000,
      formattedPrice: formatPrice('15000'),
      durationInDays: 0,
      value: 'gosend'
    },
    {
      label: 'JNE',
      price: 9000,
      formattedPrice: formatPrice('9000'),
      durationInDays: 2,
      value: 'jne'
    },
    {
      label: 'Personal Courier',
      price: 29000,
      formattedPrice: formatPrice('29000'),
      durationInDays: 1,
      value: 'personal'
    }
  ],
  chosenShipment: {}
})

const getters = {
  durationInLabel: state => {
    const chosenShipment = state.chosenShipment
    if (chosenShipment.value) {
      return chosenShipment.durationInDays === 0
        ? 'today'
        : `${chosenShipment.durationInDays} ${chosenShipment.durationInDays === 1 ? 'day' : 'days'}`
    } return null
  }
}

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
