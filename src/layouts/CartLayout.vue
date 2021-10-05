<template>
  <main>
    <payment-navigation></payment-navigation>
    <section class="section section--whiteBackground">
      <base-back-button
        v-if="backButtonText && backButtonPath"
        text="Back to Cart"
        path="/cart"
      ></base-back-button>

      <div class="mainContent">
        <slot name="left" class="mainContent__detail"></slot>

        <slot name="right"></slot>
      </div>
    </section>
  </main>
</template>

<script>
import BaseBackButton from '@/components/BaseBackButton.vue'
import PaymentNavigation from '@/components/payment/PaymentNavigation.vue'

export default {
  components: {
    BaseBackButton,
    PaymentNavigation
  },
  name: 'CartLayout',
  props: {
    backButtonText: {
      type: String,
      default: null
    },
    backButtonPath: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.mainContent
  margin-top: 1.5rem
  display: grid
  grid-template-columns: auto auto auto auto auto
  grid-gap: 2rem

.mainContent__detail
  grid-column-start: 1
  grid-column-end: 5
</style>
