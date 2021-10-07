<template>
  <main class="main--blankCenter">
    <h1 class="heading">Sorry, the page you are looking for not exist</h1>
    <router-link class="btn btn--primary pageNotFound__button" to="/cart/delivery">
      Back to Evaluate
    </router-link>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.pageNotFound__button
  margin-top: 1rem
</style>
