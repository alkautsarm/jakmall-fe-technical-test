import formatPrice from '@/utils/priceFormatting.js'

const getDefaultPaymentState = () => {
  return {
    paymentChoices: [
      {
        label: 'e-Wallet',
        saldo: 1500000,
        formattedSaldo: formatPrice('1500000'),
        value: 'ewallet'
      },
      {
        label: 'Bank Transfer',
        saldo: '',
        formattedSaldo: '',
        value: 'bank'
      },
      {
        label: 'Virtual Account',
        saldo: '',
        formattedSaldo: '',
        value: 'va'
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
