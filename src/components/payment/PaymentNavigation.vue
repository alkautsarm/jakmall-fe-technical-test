<template>
  <div class="div__paymentNav">
    <div class="div__paymentNavSteps">
      <div class="div__paymentNavItem" v-for="(item, idx) in steps" :key="idx">
        <div
          class="div__paymentNavNum"
          :class="`div__paymentNavNum--${item.routeName === $route.name ? 'active': 'unactive'}`"
        >
          <span>{{ idx + 1 }}</span>
        </div>
        <div class="div__paymentNavText">
          <span>{{ item.text }}</span>
        </div>
        <img
          class="div__paymentArrow"
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
          routeName: 'CartDelivery',
          text: 'Delivery'
        },
        {
          routeName: 'CartPayment',
          text: 'Payment'
        },
        {
          routeName: 'CartFinish',
          text: 'Finish'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/styles/index.styl"

.div__paymentNav
  display: flex
  justify-content: center
  margin-bottom: -35px

.div__paymentNavSteps
  display: flex
  justify-content: center
  font-weight: 500
  color: color-brand
  background-color: color-background
  padding: 1.25rem 2rem
  border-radius: 35px

.div__paymentNavItem
  display: flex
  align-items: center

.div__paymentNavItem:not(:last-child)
  margin-right: 1rem

.div__paymentNavNum
  padding: 0.2rem 0.5rem
  border-radius: 50%
  margin-right: 0.5rem

.div__paymentNavNum--active
  color: color-white
  background-color: color-brand

.div__paymentNavNum--unactive
  background-color: rgba(color-brand, 0.2)

.div__paymentArrow
  margin-left: 1.25rem
</style>
