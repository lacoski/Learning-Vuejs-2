<template>
  <div class="well">
    <img v-bind:src="catimgsrc" />
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    // data () {
    //   return {
    //     catimgsrc: 'http://thecatapi.com/api/images/get?size=med'
    //   }
    // }
    computed: {
      catimgsrc () {
        return 'http://thecatapi.com/api/images/get?size=med&ts=' + this.$store.getters.getTimestamp
      }
    }
  }
</script>
