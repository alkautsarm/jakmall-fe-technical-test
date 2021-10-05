<template>
  <div class="deliveryDetail">
    <!-- Delivery detail title -->
    <div class="deliveryDetail__title">
      <div class="deliveryDetail__heading--stroked">
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
        <label class="deliveryDetail__dropshippingLabel" for="dropshippingStatus">
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
          <span class="deliveryDetail__dropshippingText">Send as dropshipper</span>
        </label>
      </div>
    </div>

    <!-- Delivery detail form -->
    <div class="deliveryDetail__form">
      <!-- Email input -->
      <base-input
        input-label="Email"
        input-placeholder="Email"
        :input-model="form.email"
        input-type="email"
        form-key="email"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--left"
      ></base-input>

      <!-- Dropshipper name input -->
      <base-input
        input-label="Dropshipper name"
        input-placeholder="Dropshipper name"
        :input-model="form.dropshipperName"
        input-type="text"
        form-key="dropshipperName"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--right"
      ></base-input>

      <!-- Phone number input -->
      <base-input
        input-label="Phone number"
        input-placeholder="Phone number"
        :input-model="form.phoneNumber"
        input-type="text"
        form-key="phoneNumber"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--left"
      ></base-input>

      <!-- Dropshipper phone number input -->
      <base-input
        input-label="Dropshipper phone number"
        input-placeholder="Dropshipper phone number"
        :input-model="form.dropshipperPhoneNumber"
        input-type="text"
        form-key="dropshipperPhoneNumber"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--right"
      ></base-input>

      <!-- Delivery address input -->
      <base-textarea
        textarea-label="Delivery address"
        textarea-placeholder="Delivery address"
        :textarea-model="form.deliveryAddress"
        form-key="deliveryAddress"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--left"
      ></base-textarea>
    </div>
  </div>
</template>

<script>
import BaseTextarea from '@/components/base/input/BaseTextarea.vue'
import BaseInput from '@/components/base/input/BaseInput.vue'

export default {
  components: {
    BaseTextarea,
    BaseInput
  },
  name: 'DeliveryDetail',
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
  },
  methods: {
    changeFormValue (value) {
      this.form[value.formKey] = value.formValue
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.deliveryDetail__title
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 2.25rem

.deliveryDetail__heading--stroked
  box-shadow: 0px -10px 0px color-primary-stroke inset

.deliveryDetail__dropshippingLabel
  display: flex
  align-items: center
  cursor: pointer

.deliveryDetail__dropshippingText
  margin-left: 0.5rem

.deliveryDetail__form
  display: grid
  grid-template-columns: 1fr 1fr 1fr 0.5fr
  grid-column-gap: 2rem
  grid-row-gap: 0.75rem

.deliveryDetail__input--left
  grid-column-start: 1
  grid-column-end: 3

.deliveryDetail__input--right
  grid-column-start: 3
  grid-column-end: 5
</style>
