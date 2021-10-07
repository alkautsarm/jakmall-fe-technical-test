<template>
  <div class="paymentDetail">
    <!-- Shipment title -->
    <div class="paymentDetail__title">
      <div class="paymentDetail__heading--stroked">
        <h1 class="heading">Shipment</h1>
      </div>
    </div>

    <!-- Shipment form -->
    <div class="paymentDetail__form">
      <base-radio-button
        v-for="(shipment, idx) in shipmentChoices"
        :key="idx"
        :radio-label="shipment.label"
        :radio-detail="shipment.formattedPrice"
        :radio-model="chosenShipment"
        :radio-value="shipment"
        form-key="shipment"
        @updateValue="changeFormValue"
      ></base-radio-button>
    </div>
    <div class="form__error-message" v-if="!$v.chosenShipment.required">
      {{ getErrorMessage('required') }}
    </div>

    <!-- Payment title -->
    <div class="paymentDetail__title paymentDetail__title--payment">
      <div class="paymentDetail__heading--stroked">
        <h1 class="heading">Payment</h1>
      </div>
    </div>

    <!-- Payment form -->
    <div class="paymentDetail__form">
      <base-radio-button
        v-for="(payment, idx) in paymentChoices"
        :key="idx"
        :radio-label="payment.label"
        :radio-detail="`${payment.formattedSaldo} left`"
        :radio-model="chosenPayment"
        :radio-value="payment"
        form-key="payment"
        :label-only="payment.value !== 'ewallet'"
        @updateValue="changeFormValuePayment"
      ></base-radio-button>
    </div>
    <div class="form__error-message" v-if="!$v.chosenPayment.required">
      {{ getErrorMessage('required') }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import errorMessage from '@/utils/errorMessage.js'

import BaseRadioButton from '@/components/base/input/BaseRadioButton.vue'

export default {
  components: {
    BaseRadioButton
  },
  mixins: [
    validationMixin
  ],
  name: 'PaymentDetail',
  computed: {
    ...mapState('shipment', ['shipmentChoices', 'chosenShipment']),
    ...mapState('payment', ['paymentChoices', 'chosenPayment'])
  },
  validations: {
    chosenShipment: {
      required
    },
    chosenPayment: {
      required
    }
  },
  methods: {
    ...mapMutations('shipment', ['changeShipment', 'changeShipmentSubmitStatus']),
    ...mapMutations('payment', ['changePayment', 'changePaymentSubmitStatus']),
    changeFormValue (value) {
      this.changeShipment(value)
      this.$v.chosenShipment.$touch()

      this.changeShipmentSubmitStatus(!this.$v.chosenShipment.$invalid)
    },
    changeFormValuePayment (value) {
      this.changePayment(value)
      this.$v.chosenPayment.$touch()

      this.changePaymentSubmitStatus(!this.$v.chosenPayment.$invalid)
    },
    getErrorMessage (key, payload) {
      if (!payload) {
        payload = {}
      }

      return errorMessage(key, payload)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.paymentDetail__title
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 2.25rem

.paymentDetail__title--payment
  margin-top: 4rem

.paymentDetail__heading--stroked
  box-shadow: 0px -10px 0px color-primary-stroke inset

.paymentDetail__form
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-column-gap: 0.75rem
  grid-row-gap: 0.75rem

@media screen and (max-width: breakpoints-tablet)
  .paymentDetail__form
    grid-template-columns: 1fr 1fr

@media screen and (max-width: breakpoints-mobile-large)
  .paymentDetail__form
    grid-template-columns: 1fr

@media screen and (max-width: breakpoints-mobile-large)
  .paymentDetail__title
    margin-bottom: 1.5rem
</style>
