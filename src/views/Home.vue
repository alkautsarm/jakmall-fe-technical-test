<template>
  <main class="main--blankCenter">
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
.home__button
  margin-top: 1rem
</style>
