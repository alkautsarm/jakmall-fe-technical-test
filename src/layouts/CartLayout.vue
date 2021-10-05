<template>
  <main>
    <payment-navigation></payment-navigation>
    <section class="section section--whiteBackground">
      <base-back-button
        v-if="backButtonText && backButtonPath"
        :text="backButtonText"
        :path="backButtonPath"
      ></base-back-button>

      <div class="mainContent">
        <div class="mainContent__detail--left">
          <slot name="left"></slot>
        </div>

        <div class="mainContent__detail--right">
          <slot name="right"></slot>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BaseBackButton from '@/components/base/BaseBackButton.vue'
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
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 2rem

.mainContent__detail--left
  grid-column-start: 1
  grid-column-end: 3

.mainContent__detail--right
  grid-column-start: 3
  grid-column-end: 4
</style>
