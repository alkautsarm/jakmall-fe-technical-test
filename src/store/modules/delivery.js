import formatPrice from '@/utils/priceFormatting.js'

const state = () => ({
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
})

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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
