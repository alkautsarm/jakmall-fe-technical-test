<template>
  <div class="paymentSummary">
    <!-- Payment summary header -->
    <div>
      <!-- Title -->
      <div>
        <h2 class="heading paymentSummary__title">Summary</h2>
      </div>

      <!-- Total item purchased -->
      <div>
        <span>10 items purchased</span>
      </div>
      <hr v-if="deliveryMethod" class="paymentSummary__stroke">
      <!-- Delivery estimation -->
      <div v-if="deliveryMethod" class="paymentSummary__otherDetail">
        <span class="paymentSummary__methodName">Delivery estimation</span>
        <br>
        <span class="paymentSummary__detailMethod">today by {{ deliveryMethod }}</span>
      </div>
      <hr v-if="paymentMethod" class="paymentSummary__stroke">
      <!-- Payment method -->
      <div v-if="paymentMethod" class="paymentSummary__otherDetail">
        <span class="paymentSummary__methodName">Payment method</span>
        <br>
        <span class="paymentSummary__detailMethod">{{ paymentMethod }}</span>
      </div>
    </div>

    <!-- Payment summary footer -->
    <div>
      <!-- Detail price -->
      <div>
        <div
          class="paymentSummary__detailPrice"
        >
          <span class="paymentSummary__priceText">Cost of Goods</span>
          <span class="paymentSummary__priceNum">{{ changePriceFormat(detailPrice.cogs) }}</span>
        </div>

        <div
          class="paymentSummary__detailPrice"
        >
          <span class="paymentSummary__priceText">Dropshipping Fee</span>
          <span class="paymentSummary__priceNum">{{ changePriceFormat(detailPrice.dropship) }}</span>
        </div>

        <div
          class="paymentSummary__detailPrice"
        >
          <span class="paymentSummary__priceText"><b>GO-SEND</b> Shipment</span>
          <span class="paymentSummary__priceNum">{{ changePriceFormat(detailPrice.shipment) }}</span>
        </div>
      </div>

      <!-- Total price -->
      <div class="paymentSummary__totalPrice">
        <h2 class="heading">Total</h2>
        <h2 class="heading">{{ changePriceFormat(totalPrice) }}</h2>
      </div>

      <!-- Continue to Payment button -->
      <button
        v-if="$route.name !== 'CartFinish'"
        class="btn btn--primary btn--fullWidth paymentSummary__btn"
      >
        {{ buttonData[$route.name].text }}
      </button>
    </div>
  </div>
</template>

<script>
import formatPrice from '@/utils/priceFormatting.js'

export default {
  name: 'PaymentSummary',
  props: {
    deliveryMethod: {
      type: String,
      default: null
    },
    paymentMethod: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      detailPrice: {
        cogs: 500000,
        dropship: 5900,
        shipment: 15000
      },
      buttonData: {
        CartDelivery: {
          text: 'Continue to Payment'
        },
        CartPayment: {
          text: `Pay with ${this.paymentMethod ? this.paymentMethod : ''}`
        }
      }
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      const keys = Object.keys(this.detailPrice)
      keys.map((key) => {
        total += this.detailPrice[key]
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
  min-height: 520px

.paymentSummary__title
  margin-bottom: 0.5rem

.paymentSummary__stroke
  color: color-other-stroke
  width: 25%
  margin-top: 1.25rem

.paymentSummary__otherDetail
  margin-top: 1.25rem

.paymentSummary__methodName
  font-weight: 500
  font-size: 0.9rem

.paymentSummary__detailMethod
  color: color-success
  font-weight: 500

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
