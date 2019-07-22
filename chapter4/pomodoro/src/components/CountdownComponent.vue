<!-- <template lang='jade'>
  .well
    .pomodoro-timer
      span {{ min | leftpad }}:{{ sec | leftpad }}
</template> -->

<template>
 <div class="well">
  <div class="pomodoro-timer">
    <span>{{ min | leftpad }}:{{ sec | leftpad }}</span>
  </div>
 </div>
</template> 

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        min: 1,
        sec: 6
      }
    }
  }
</script>
