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
      <div
        class="form__inputGroup deliveryDetail__input--left"
        :class="form.email ? 'form__inputGroup--filled' : 'form__inputGroup--empty'"
      >
        <label v-if="form.email" class="form__inputLabel">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="form__input"
        >
      </div>

      <!-- Dropshipper name input -->
      <div
        class="form__inputGroup deliveryDetail__input--right"
        :class="form.dropshipperName ? 'form__inputGroup--filled' : 'form__inputGroup--empty'"
      >
        <label v-if="form.dropshipperName" class="form__inputLabel">Dropshipper name</label>
        <input
          v-model="form.dropshipperName"
          type="text"
          placeholder="Dropshipper name"
          class="form__input"
        >
      </div>

      <!-- Phone number input -->
      <div
        class="form__inputGroup deliveryDetail__input--left"
        :class="form.phoneNumber ? 'form__inputGroup--filled' : 'form__inputGroup--empty'"
      >
        <label v-if="form.phoneNumber" class="form__inputLabel">Phone number</label>
        <input
          v-model="form.phoneNumber"
          type="text"
          placeholder="Phone number"
          class="form__input"
        >
      </div>

      <!-- Dropshipper phone number input -->
      <div
        class="form__inputGroup deliveryDetail__input--right"
        :class="form.dropshipperPhoneNumber ? 'form__inputGroup--filled' : 'form__inputGroup--empty'"
      >
        <label v-if="form.dropshipperPhoneNumber" class="form__inputLabel">Dropshipper phone number</label>
        <input
          v-model="form.dropshipperPhoneNumber"
          type="text"
          placeholder="Dropshipper phone number"
          class="form__input"
        >
      </div>

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

export default {
  components: { BaseTextarea },
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
