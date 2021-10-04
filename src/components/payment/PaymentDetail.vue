<template>
  <div class="paymentDetail">
    <!-- Payment detail title -->
    <div class="paymentDetail__title">
      <div class="paymentDetail__heading--stroked">
        <h1 class="heading">Delivery Details</h1>
      </div>
      <div>
        <div>
          <input
            v-model="form.dropshippingStatus"
            type="checkbox"
            class="form__inputCheckbox"
            id="dropshippingStatus"
          >
        </div>
        <label class="paymentDetail__dropshippingLabel" for="dropshippingStatus">
          <div
            class="form__inputGroupCheckbox"
            :class="form.dropshippingStatus ?
              'form__inputGroupCheckbox--checked' :
              'form__inputGroupCheckbox--unchecked'
            "
          >
            <img
              v-if="form.dropshippingStatus"
              src="@/assets/icons/success.svg"
              alt="Checked box icon"
            >
          </div>
          <span class="paymentDetail__dropshippingText">Send as dropshipper</span>
        </label>
      </div>
    </div>

    <!-- Payment detail form -->
    <div class="paymentDetail__form">
      <!-- Email input -->
      <div class="form__inputGroup paymentDetail__input--left">
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="form__input"
        >
      </div>

      <!-- Dropshipper name input -->
      <div class="form__inputGroup">
        <input
          v-model="form.dropshipperName"
          type="text"
          placeholder="Dropshipper name"
          class="form__input"
        >
      </div>

      <!-- Phone number input -->
      <div class="form__inputGroup paymentDetail__input--left">
        <input
          v-model="form.phoneNumber"
          type="text"
          placeholder="Phone number"
          class="form__input"
        >
      </div>

      <!-- Dropshipper phone number input -->
      <div class="form__inputGroup">
        <input
          v-model="form.dropshipperPhoneNumber"
          type="text"
          placeholder="Dropshipper phone number"
          class="form__input"
        >
      </div>

      <!-- Delivery address input -->
      <div class="form__inputGroup paymentDetail__input--left">
        <textarea
          v-model="form.deliveryAddress"
          placeholder="Delivery Address"
          class="form__input form__textarea"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDetail',
  data () {
    return {
      form: {
        dropshippingStatus: false,
        email: '',
        dropshipperName: '',
        phoneNumber: '',
        dropshipperPhoneNumber: '',
        deliveryAddress: ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.paymentDetail__title
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 2.25rem

.paymentDetail__heading--stroked
  box-shadow: 0px -10px 0px color-primary-stroke inset

.paymentDetail__dropshippingLabel
  display: flex
  align-items: center
  cursor: pointer

.paymentDetail__dropshippingText
  margin-left: 0.5rem

.paymentDetail__form
  display: grid
  grid-template-columns: auto auto auto
  grid-template-rows: auto auto auto
  grid-column-gap: 2rem
  grid-row-gap: 0.75rem

.paymentDetail__input--left
  grid-column-start: 1
  grid-column-end: 3
</style>
