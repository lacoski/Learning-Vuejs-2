<template>
  <div id="app">
    <h1 v-if="!isadmin">Beer Time!</h1>
    <h1 v-show="!isadmin">Beer Time!</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isadmin: true
      }
    }
  }
</script>
