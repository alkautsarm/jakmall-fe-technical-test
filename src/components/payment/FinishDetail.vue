<template>
  <div class="finishDetail">
    <div>
      <!-- End of payment title -->
      <div class="finishDetail__title">
        <div class="finishDetail__heading--stroked">
          <h1 class="heading">Thank you</h1>
        </div>
      </div>

      <!-- End of payment detail -->
      <div class="finishDetail__detail">
        <span>
          <b>Order ID: XXKYB</b>
        </span>
        <br>
        <span>
          Your order will be delivered today with GO-SEND
        </span>
      </div>

      <base-back-button
        text="Go to homepage"
        path="/cart/delivery"
      ></base-back-button>
    </div>
  </div>
</template>

<script>
import BaseBackButton from '@/components/base/BaseBackButton.vue'
export default {
  components: {
    BaseBackButton
  },
  name: 'FinishDetail',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.finishDetail
  display: flex
  align-items: center
  justify-content: center
  height: 100%

.finishDetail__title
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 2.25rem

.finishDetail__heading--stroked
  box-shadow: 0px -10px 0px color-primary-stroke inset

.finishDetail__detail
  margin-bottom: 4rem
</style>
