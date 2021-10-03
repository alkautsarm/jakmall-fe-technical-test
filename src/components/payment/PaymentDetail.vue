<template>
  <div class="paymentDetail">
    <!-- Payment detail title -->
    <div class="paymentDetail__title">
      <div class="paymentDetail__heading--stroked">
        <h1 class="heading">Delivery Details</h1>
      </div>
      <div class="paymentDetail__dropshipping">
        <span>Send as dropshipper</span>
      </div>
    </div>

    <!-- Payment detail form -->
    <div class="paymentDetail__form">
      <!-- Email input -->
      <div class="form__inputGroup paymentDetail__input--left">
        <input type="email" placeholder="Email" class="form__input">
      </div>

      <!-- Dropshipper name input -->
      <div class="form__inputGroup">
        <input type="text" placeholder="Dropshipper name" class="form__input">
      </div>

      <!-- Phone number input -->
      <div class="form__inputGroup paymentDetail__input--left">
        <input type="text" placeholder="Phone number" class="form__input">
      </div>

      <!-- Dropshipper phone number input -->
      <div class="form__inputGroup">
        <input type="text" placeholder="Dropshipper phone number" class="form__input">
      </div>

      <!-- Delivery address input -->
      <div class="form__inputGroup paymentDetail__input--left">
        <textarea placeholder="Delivery Address" class="form__input form__textarea"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDetail'
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
