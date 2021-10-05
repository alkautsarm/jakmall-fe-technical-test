<template>
  <cart-layout>
    <template v-slot:left>
      <finish-detail></finish-detail>
    </template>
    <template v-slot:right>
      <payment-summary></payment-summary>
    </template>
  </cart-layout>
</template>

<script>
import CartLayout from '@/layouts/CartLayout.vue'
import FinishDetail from '@/components/payment/FinishDetail.vue'
import PaymentSummary from '@/components/payment/PaymentSummary.vue'

export default {
  components: {
    CartLayout,
    PaymentSummary,
    FinishDetail
  }
}
</script>

<style lang="stylus" scoped></style>
