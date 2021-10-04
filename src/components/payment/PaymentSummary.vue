<template>
  <div class="paymentSummary">
    <!-- Payment summary header -->
    <div class="paymentSummary__header">
      <!-- Title -->
      <div>
        <h2 class="heading paymentSummary__title">Summary</h2>
      </div>

      <!-- Total item purchased -->
      <div>
        <span>10 items purchased</span>
      </div>
    </div>

    <!-- Payment summary footer -->
    <div>
      <!-- Detail price -->
      <div>
        <div
          v-for="detail in detailPriceList"
          :key="detail.type"
          class="paymentSummary__detailPrice"
        >
          <span class="paymentSummary__priceText">{{ detail.text }}</span>
          <span class="paymentSummary__priceNum">{{ changePriceFormat(detail.price) }}</span>
        </div>
      </div>

      <!-- Total price -->
      <div class="paymentSummary__totalPrice">
        <h2 class="heading">Total</h2>
        <h2 class="heading">{{ changePriceFormat(totalPrice) }}</h2>
      </div>

      <!-- Continue to Payment button -->
      <button class="btn btn--primary btn--fullWidth paymentSummary__btn">Continue to Payment</button>
    </div>
  </div>
</template>

<script>
import formatPrice from '@/utils/priceFormatting.js'

export default {
  name: 'PaymentSummary',
  data () {
    return {
      detailPriceList: [
        {
          type: 'cogs',
          text: 'Cost of Goods',
          price: 500000
        },
        {
          type: 'dropship',
          text: 'Dropshipping Fee',
          price: 5900
        }
      ]
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.detailPriceList.map((item) => {
        total += item.price
      })

      return total
    }
  },
  methods: {
    changePriceFormat (price) {
      return formatPrice(price.toString())
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.paymentSummary
  padding-left: 2rem
  border-left: 1px solid rgba(color-brand, 0.2)
  display: flex
  flex-direction: column
  justify-content: space-between

.paymentSummary__header
  margin-bottom: 13rem

.paymentSummary__title
  margin-bottom: 0.5rem

.paymentSummary__detailPrice
  display: flex
  justify-content: space-between
  margin-bottom: 0.75rem

.paymentSummary__priceText
  opacity: 0.6

.paymentSummary__priceNum
  font-weight: 700

.paymentSummary__totalPrice
  display: flex
  justify-content: space-between
  margin-top: 1.5rem

.paymentSummary__btn
  margin-top: 2rem
</style>
