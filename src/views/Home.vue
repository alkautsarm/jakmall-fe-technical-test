<template>
  <main class="home">
    <h1 class="heading">Hello, Welcome to Jakmall FE Technical Test!</h1>
    <router-link class="btn btn--primary home__button" to="/cart/delivery">
      Start to Evaluate
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.home
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 100%
  height: 70vh

.home__button
  margin-top: 1rem
</style>
