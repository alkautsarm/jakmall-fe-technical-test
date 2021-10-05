<template>
  <div class="paymentNav">
    <div class="paymentNav__steps">
      <div class="paymentNav__item" v-for="(item, idx) in steps" :key="idx">
        <div
          class="paymentNav__num"
          :class="`paymentNav__num--${item.activationRouteName.indexOf($route.name) !== -1 ? 'active': 'unactive'}`"
        >
          <span>{{ idx + 1 }}</span>
        </div>
        <div class="div__paymentNavText">
          <span>{{ item.text }}</span>
        </div>
        <img
          class="paymentNav__arrow"
          v-if="idx !== (steps.length - 1)"
          src="@/assets/icons/keyboard_arrow_right.svg"
          alt="Payment steps arrow"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentNavigation',
  data () {
    return {
      steps: [
        {
          activationRouteName: ['CartDelivery', 'CartPayment', 'CartFinish'],
          text: 'Delivery'
        },
        {
          activationRouteName: ['CartPayment', 'CartFinish'],
          text: 'Payment'
        },
        {
          activationRouteName: ['CartFinish'],
          text: 'Finish'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.paymentNav
  display: flex
  justify-content: center
  margin-bottom: -35px

.paymentNav__steps
  display: flex
  justify-content: center
  font-weight: 500
  color: color-brand
  background-color: color-background
  padding: 1.25rem 2rem
  border-radius: 35px

.paymentNav__item
  display: flex
  align-items: center

.paymentNav__item:not(:last-child)
  margin-right: 1rem

.paymentNav__num
  padding: 0.2rem 0.5rem
  border-radius: 50%
  margin-right: 0.5rem

.paymentNav__num--active
  color: color-white
  background-color: color-brand

.paymentNav__num--unactive
  background-color: rgba(color-brand, 0.2)

.paymentNav__arrow
  margin-left: 1.25rem
</style>
