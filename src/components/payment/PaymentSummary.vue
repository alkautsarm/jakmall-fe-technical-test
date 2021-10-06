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
        <span>{{ formattedTotalItems }} items purchased</span>
      </div>
      <hr v-if="chosenShipment.value" class="paymentSummary__stroke">
      <!-- Delivery estimation -->
      <div v-if="chosenShipment.value" class="paymentSummary__otherDetail">
        <span class="paymentSummary__methodName">Delivery estimation</span>
        <br>
        <span class="paymentSummary__detailMethod">
          {{ `${ durationInLabel } by ${ chosenShipment.label }` }}
        </span>
      </div>
      <hr v-if="chosenPayment.value" class="paymentSummary__stroke">
      <!-- Payment method -->
      <div v-if="chosenPayment.value" class="paymentSummary__otherDetail">
        <span class="paymentSummary__methodName">Payment method</span>
        <br>
        <span class="paymentSummary__detailMethod">{{ chosenPayment.label }}</span>
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
          <span class="paymentSummary__priceNum">{{ formattedTotalCogs }}</span>
        </div>

        <div
          v-if="deliveryData.dropshippingStatus"
          class="paymentSummary__detailPrice"
        >
          <span class="paymentSummary__priceText">Dropshipping Fee</span>
          <span class="paymentSummary__priceNum">{{ formattedDropshippingFee }}</span>
        </div>

        <div
          class="paymentSummary__detailPrice"
          v-if="chosenShipment.value"
        >
          <span class="paymentSummary__priceText">
            <b>{{ chosenShipment.label }}</b> Shipment
          </span>
          <span class="paymentSummary__priceNum">
            {{ chosenShipment.formattedPrice }}
          </span>
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
        @click="
          $route.name === 'CartDelivery'
            ? continueToPayment()
            : pay()
        "
        :disabled="
          $route.name === 'CartDelivery'
            ? !submitStatus :
            !submitStatus && !shipmentSubmitStatus && !paymentSubmitStatus
        "
      >
        {{
          $route.name === 'CartDelivery'
            ? 'Continue to Payment'
            : `Pay with ${ chosenPayment.label }`
        }}
      </button>
    </div>
  </div>
</template>

<script>
import formatPrice from '@/utils/priceFormatting.js'
import orderIDGenerator from '@/utils/orderIDGenerator'
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'PaymentSummary',
  props: {
    paymentMethod: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState('cart', ['totalCogs']),
    ...mapState('delivery', ['dropshippingFee', 'deliveryData', 'submitStatus']),
    ...mapState('shipment', ['chosenShipment', 'shipmentSubmitStatus']),
    ...mapState('payment', ['chosenPayment', 'paymentSubmitStatus']),
    ...mapGetters('cart', ['formattedTotalItems', 'formattedTotalCogs']),
    ...mapGetters('delivery', ['formattedDropshippingFee']),
    ...mapGetters('shipment', ['durationInLabel']),

    totalPrice () {
      const cogs = this.totalCogs

      const dropshippingCost = this.deliveryData.dropshippingStatus
        ? this.dropshippingFee
        : 0

      const shipmentCost = this.chosenShipment.price
        ? this.chosenShipment.price
        : 0

      const total = cogs + dropshippingCost + shipmentCost

      return total
    }
  },
  methods: {
    ...mapMutations('delivery', ['changeDeliveryData']),
    ...mapMutations('order', ['changeOrderID']),
    changeFormValue (value) {
      this.changeDeliveryData(value)
    },
    changePriceFormat (price) {
      return formatPrice(price.toString())
    },
    continueToPayment () {
      this.$router.push({ name: 'CartPayment' })
    },
    pay () {
      this.changeOrderID({
        value: orderIDGenerator(5)
      })
      this.$router.push({ name: 'CartFinish' })
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
