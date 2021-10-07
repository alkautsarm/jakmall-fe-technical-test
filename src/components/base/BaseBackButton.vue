<template>
  <div class="backButton" @click="moveNavigation">
    <img
      src="@/assets/icons/arrow_back.svg"
      alt="Navigation back arrow"
    >

    <span class="backButton__text">
      {{ text }}
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'BaseBackButton',
  props: {
    text: {
      type: String,
      default: 'Back'
    },
    path: {
      type: String,
      required: true
    },
    isClearLocalStorage: {
      type: Boolean,
      default: false
    }
  },
  destroyed () {
    if (this.isClearLocalStorage) {
      this.cartResetState()
      this.paymentResetState()
      this.shipmentResetState()
      this.deliveryResetState()
      this.orderResetState()
    }
  },
  methods: {
    ...mapMutations('cart', { cartResetState: 'resetState' }),
    ...mapMutations('payment', { paymentResetState: 'resetState' }),
    ...mapMutations('shipment', { shipmentResetState: 'resetState' }),
    ...mapMutations('delivery', { deliveryResetState: 'resetState' }),
    ...mapMutations('order', { orderResetState: 'resetState' }),

    moveNavigation () {
      if (this.isClearLocalStorage) {
        window.localStorage.removeItem('vuex')
      }
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.backButton
  display: flex
  align-items: center
  width: fit-content
  cursor: pointer

.backButton__text
  opacity: 0.6
  margin-left: 0.5rem

.backButton:hover
  opacity: 0.6
</style>
