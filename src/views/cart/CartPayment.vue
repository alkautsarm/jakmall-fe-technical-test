<template>
  <cart-layout backButtonText="Back to delivery" backButtonPath="/cart/delivery">
    <template v-slot:left>
      <payment-detail></payment-detail>
    </template>
    <template v-slot:right>
      <payment-summary></payment-summary>
    </template>
  </cart-layout>
</template>

<script>
import CartLayout from '@/layouts/CartLayout.vue'
import PaymentDetail from '@/components/payment/PaymentDetail.vue'
import PaymentSummary from '@/components/payment/PaymentSummary.vue'

export default {
  components: {
    CartLayout,
    PaymentSummary,
    PaymentDetail
  }
}
</script>

<style lang="stylus" scoped></style>
