<template>
  <cart-layout backButtonText="Back to Cart" backButtonPath="/cart">
    <template v-slot:left>
      <delivery-detail></delivery-detail>
    </template>
    <template v-slot:right>
      <payment-summary></payment-summary>
    </template>
  </cart-layout>
</template>

<script>
import CartLayout from '@/layouts/CartLayout.vue'
import DeliveryDetail from '@/components/payment/DeliveryDetail.vue'
import PaymentSummary from '@/components/payment/PaymentSummary.vue'

export default {
  components: {
    CartLayout,
    PaymentSummary,
    DeliveryDetail
  }
}
</script>

<style lang="stylus" scoped></style>
