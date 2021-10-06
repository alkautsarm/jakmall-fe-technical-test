<template>
  <router-link class="backButton" :to="path">
    <img
      src="@/assets/icons/arrow_back.svg"
      alt="Navigation back arrow"
    >

    <span class="backButton__text">
      {{ text }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'BaseBackButton',
  props: {
    text: {
      type: String,
      default: 'Back'
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.backButton
  display: flex
  align-items: center
  width: fit-content

.backButton__text
  opacity: 0.6
  margin-left: 0.5rem
</style>
