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
            v-model="deliveryData.dropshippingStatus"
            type="checkbox"
            class="form__inputCheckbox"
            id="dropshippingStatus"
          >
        </div>
        <label class="deliveryDetail__dropshippingLabel" for="dropshippingStatus">
          <div
            class="form__inputGroupCheckbox"
            :class="deliveryData.dropshippingStatus ?
              'form__inputGroupCheckbox--checked' :
              'form__inputGroupCheckbox--unchecked'
            "
          >
            <img
              v-if="deliveryData.dropshippingStatus"
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
        :input-model="deliveryData.email"
        input-type="email"
        form-key="email"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--left"
        :is-input-true="
          $v.deliveryData.email.email
        "
      >
        <template v-slot:errorMessage>
          <div class="form__error-message" v-if="!$v.deliveryData.email.email">
            {{ getErrorMessage('email') }}
          </div>
        </template>
      </base-input>

      <!-- Dropshipper name input -->
      <base-input
        input-label="Dropshipper name"
        input-placeholder="Dropshipper name"
        :input-model="deliveryData.dropshipperName"
        input-type="text"
        form-key="dropshipperName"
        :disabled-status="!deliveryData.dropshippingStatus"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--right"
        :is-input-true="
          $v.deliveryData.dropshipperName.required
        "
      >
        <template v-slot:errorMessage>
          <div class="form__error-message" v-if="!$v.deliveryData.dropshipperName.required">
            {{ getErrorMessage('required') }}
          </div>
        </template>
      </base-input>

      <!-- Phone number input -->
      <base-input
        input-label="Phone number"
        input-placeholder="Phone number"
        :input-model="deliveryData.phoneNumber"
        input-type="text"
        form-key="phoneNumber"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--left"
        :is-input-true="
          $v.deliveryData.phoneNumber.minLength && $v.deliveryData.phoneNumber.maxLength && $v.deliveryData.phoneNumber.phoneNumberValidator
        "
      >
        <template v-slot:errorMessage>
          <div class="form__error-message" v-if="!$v.deliveryData.phoneNumber.minLength">
            {{
              getErrorMessage('minLength',{
                label: 'Phone number',
                length: $v.deliveryData.phoneNumber.$params.minLength.min
              })
            }}
          </div>

          <div class="form__error-message" v-if="!$v.deliveryData.phoneNumber.maxLength">
            {{
              getErrorMessage('maxLength',{
                label: 'Phone number',
                length: $v.deliveryData.phoneNumber.$params.maxLength.max
              })
            }}
          </div>

          <div class="form__error-message" v-if="!$v.deliveryData.phoneNumber.phoneNumberValidator">
            {{
              getErrorMessage('phoneNumberValidator')
            }}
          </div>
        </template>
      </base-input>

      <!-- Dropshipper phone number input -->
      <base-input
        input-label="Dropshipper phone number"
        input-placeholder="Dropshipper phone number"
        :input-model="deliveryData.dropshipperPhoneNumber"
        input-type="text"
        form-key="dropshipperPhoneNumber"
        :disabled-status="!deliveryData.dropshippingStatus"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--right"
        :is-input-true="
          $v.deliveryData.dropshipperPhoneNumber.minLength && $v.deliveryData.dropshipperPhoneNumber.maxLength && $v.deliveryData.dropshipperPhoneNumber.phoneNumberValidator
        "
      >
        <template v-slot:errorMessage>
          <div class="form__error-message" v-if="!$v.deliveryData.dropshipperPhoneNumber.minLength">
            {{
              getErrorMessage('minLength',{
                label: 'Phone number',
                length: $v.deliveryData.dropshipperPhoneNumber.$params.minLength.min
              })
            }}
          </div>

          <div class="form__error-message" v-if="!$v.deliveryData.dropshipperPhoneNumber.maxLength">
            {{
              getErrorMessage('maxLength',{
                label: 'Phone number',
                length: $v.deliveryData.dropshipperPhoneNumber.$params.maxLength.max
              })
            }}
          </div>

          <div class="form__error-message" v-if="!$v.deliveryData.dropshipperPhoneNumber.phoneNumberValidator">
            {{
              getErrorMessage('phoneNumberValidator')
            }}
          </div>
        </template>
      </base-input>

      <!-- Delivery address input -->
      <base-textarea
        textarea-label="Delivery address"
        textarea-placeholder="Delivery address"
        :textarea-model="deliveryData.deliveryAddress"
        form-key="deliveryAddress"
        @updateValue="changeFormValue"
        class="deliveryDetail__input--left"
        :is-input-true="
          $v.deliveryData.deliveryAddress.required && $v.deliveryData.deliveryAddress.maxLength
        "
      >
        <template v-slot:errorMessage>
          <div class="form__error-message" v-if="!$v.deliveryData.deliveryAddress.required">
            {{ getErrorMessage('required') }}
          </div>

          <div class="form__error-message" v-if="!$v.deliveryData.deliveryAddress.maxLength">
            {{
              getErrorMessage('maxLength',{
                label: 'Delivery address',
                length: $v.deliveryData.deliveryAddress.$params.maxLength.max
              })
            }}
          </div>
        </template>
      </base-textarea>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, helpers } from 'vuelidate/lib/validators'
import errorMessage from '@/utils/errorMessage.js'

import BaseTextarea from '@/components/base/input/BaseTextarea.vue'
import BaseInput from '@/components/base/input/BaseInput.vue'

const phoneNumberValidator = helpers.regex('phoneNumberValidator', /^[0-9()+-]*$/)

export default {
  components: {
    BaseTextarea,
    BaseInput
  },
  mixins: [
    validationMixin
  ],
  name: 'DeliveryDetail',
  computed: {
    ...mapState('delivery', ['deliveryData'])
  },
  validations: {
    deliveryData: {
      email: {
        email
      },
      dropshipperName: {
        required: function () {
          return this.deliveryData.dropshippingStatus ? this.deliveryData.dropshipperName : true
        }
      },
      phoneNumber: {
        phoneNumberValidator,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      dropshipperPhoneNumber: {
        phoneNumberValidator,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      deliveryAddress: {
        required,
        maxLength: maxLength(120)
      }
    }
  },
  methods: {
    ...mapMutations('delivery', ['changeDeliveryData', 'changeSubmitStatus']),
    changeFormValue (value) {
      this.changeDeliveryData(value)
      this.$v.deliveryData[value.formKey].$touch()

      this.changeSubmitStatus(!this.$v.$invalid)
    },
    getErrorMessage (key, payload) {
      if (!payload) {
        payload = {}
      }

      return errorMessage(key, payload)
    }
  },
  watch: {
    'deliveryData.dropshippingStatus' (newValue) {
      this.$v.deliveryData.dropshipperName.$touch()
      this.$v.deliveryData.dropshipperPhoneNumber.$touch()

      if (!newValue) {
        const formKey = ['dropshipperName', 'dropshipperPhoneNumber']

        formKey.map((item) => {
          this.changeDeliveryData({
            formKey: item,
            formValue: ''
          })
        })
      }
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
