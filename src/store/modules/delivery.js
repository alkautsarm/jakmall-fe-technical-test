const state = () => ({
  dropshippingFee: 5900,
  deliveryData: {
    dropshippingStatus: false,
    email: '',
    dropshipperName: '',
    phoneNumber: '',
    dropshipperPhoneNumber: '',
    deliveryAddress: ''
  }
})

const getters = {}

const actions = {}

const mutations = {
  changeDeliveryData (state, payload) {
    state.deliveryData[payload.formKey] = payload.formValue
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
