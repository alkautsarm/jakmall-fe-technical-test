<template>
  <main>
    <payment-navigation></payment-navigation>
    <section class="section section--whiteBackground">
      <base-back-button
        text="Back to Cart"
        path="/cart"
      ></base-back-button>

      <div class="mainContent">
        <payment-detail class="mainContent__detail"></payment-detail>

        <payment-summary></payment-summary>
      </div>
    </section>
  </main>
</template>

<script>
import BaseBackButton from '../../components/BaseBackButton.vue'
import PaymentDetail from '../../components/payment/PaymentDetail.vue'
import PaymentNavigation from '../../components/payment/PaymentNavigation.vue'
import PaymentSummary from '../../components/payment/PaymentSummary.vue'

export default {
  components: {
    BaseBackButton,
    PaymentNavigation,
    PaymentSummary,
    PaymentDetail
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
