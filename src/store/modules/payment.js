import formatPrice from '@/utils/priceFormatting.js'

const getDefaultPaymentState = () => {
  return {
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
  }
}

const state = getDefaultPaymentState()

const getters = {}

const actions = {}

const mutations = {
  changePayment (state, payload) {
    state.chosenPayment = payload.formValue
  },
  changePaymentSubmitStatus (state, payload) {
    state.paymentSubmitStatus = payload
  },
  resetState (state) {
    Object.assign(state, getDefaultPaymentState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
