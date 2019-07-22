<template>
  <h1>{{ msg1 }}</h1>
</template>
<style>
</style>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      msg1: 'testMessage'
    })
  }
</script>
