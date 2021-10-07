import formatPrice from '@/utils/priceFormatting.js'

const getDefaultDeliveryState = () => {
  return {
    dropshippingFee: 5900,
    deliveryData: {
      dropshippingStatus: false,
      email: '',
      dropshipperName: '',
      phoneNumber: '',
      dropshipperPhoneNumber: '',
      deliveryAddress: ''
    },
    submitStatus: false
  }
}

const state = getDefaultDeliveryState()

const getters = {
  formattedDropshippingFee: state => {
    return formatPrice(state.dropshippingFee.toString())
  }
}

const actions = {}

const mutations = {
  changeDeliveryData (state, payload) {
    state.deliveryData[payload.formKey] = payload.formValue
  },
  changeSubmitStatus (state, payload) {
    state.submitStatus = payload
  },
  resetState (state) {
    Object.assign(state, getDefaultDeliveryState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
