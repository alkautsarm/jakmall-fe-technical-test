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
        v-for="(shipment, idx) in shipmentList"
        :key="idx"
        :radio-label="shipment.label"
        :radio-detail="changePriceFormat(shipment.price)"
        :radio-model="form.shipment"
        :radio-value="shipment.value"
        form-key="shipment"
        @updateValue="changeFormValue"
      ></base-radio-button>
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
        radio-label="e-Wallet"
        :radio-detail="`${changePriceFormat(eWalletData.saldo)} left`"
        :radio-model="form.payment"
        :radio-value="eWalletData.value"
        form-key="payment"
        @updateValue="changeFormValue"
      ></base-radio-button>
    </div>
  </div>
</template>

<script>
import BaseRadioButton from '@/components/base/input/BaseRadioButton.vue'
import formatPrice from '@/utils/priceFormatting.js'

export default {
  components: {
    BaseRadioButton
  },
  name: 'PaymentDetail',
  data () {
    return {
      form: {
        shipment: '',
        payment: ''
      },
      shipmentList: [
        {
          label: 'GO-SEND',
          price: 15000,
          durationInDays: 0,
          value: 'gosend'
        },
        {
          label: 'JNE',
          price: 9000,
          durationInDays: 2,
          value: 'jne'
        },
        {
          label: 'Personal Courier',
          price: 29000,
          durationInDays: 1,
          value: 'courier'
        }
      ],
      eWalletData: {
        saldo: 1500000,
        value: 'ewallet'
      }
    }
  },
  methods: {
    changePriceFormat (price) {
      return formatPrice(price.toString())
    },
    changeFormValue (value) {
      this.form[value.formKey] = value.formValue
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
</style>
