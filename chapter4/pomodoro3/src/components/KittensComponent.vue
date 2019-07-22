<template>
  <div class="well">
    <div v-if="Math.random() * 10 < 6">hello</div>

    <img v-bind:src="catimgsrc" />
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        catimgsrc: 'http://thecatapi.com/api/images/get?size=med'
      }
    }
  }
</script>
