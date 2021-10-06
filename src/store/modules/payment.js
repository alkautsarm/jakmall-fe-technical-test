import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
  paymentChoices: [
    {
      label: 'e-Wallet',
      price: 1500000,
      formattedPrice: formatPrice('1500000'),
      value: 'ewallet'
    }
  ],
  chosenPayment: {},
  paymentSubmitStatus: false
})

const getters = {}

const actions = {}

const mutations = {
  changePayment (state, payload) {
    state.chosenPayment = payload.formValue
  },
  changePaymentSubmitStatus (state, payload) {
    state.paymentSubmitStatus = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
