import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
  totalItems: 10,
  totalCogs: 500000,
  dropshippingFee: 5900,
  deliveryData: {
    dropshippingStatus: false,
    email: '',
    dropshipperName: '',
    phoneNumber: '',
    dropshipperPhoneNumber: '',
    deliveryAddress: ''
  },
  shipmentChoices: [
    {
      label: 'GO-SEND',
      price: 15000,
      durationInDays: 0,
      value: 'gosend'
    },
    {
      label: 'JNE',
      price: 9000,
      durationInDays: 2,
      value: 'jne'
    },
    {
      label: 'Personal Courier',
      price: 29000,
      durationInDays: 1,
      value: 'courier'
    }
  ],
  paymentChoices: []
})

const getters = {
  formattedTotalItems: state => {
    return formatPrice(state.totalItems.toString())
  },
  formattedTotalCogs: state => {
    return formatPrice(state.totalCogs.toString())
  },
  formattedDropshippingFee: state => {
    return formatPrice(state.dropshippingFee.toString())
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
