<!--<template lang='jade'>
  h3 {{ isworking ? workingtitle : restingtitle }}
  <h3> {{ title }} </h3>
  {{ Math.pow(5, 3) }}
</template> -->

<template>
 <div>
 <h3>
 {{ isworking ? workingtitle : restingtitle }}
 </h3>
 </div>
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        workingtitle: 'Work!',
        restingtitle: 'Rest!',
        title: 'Learning Vue.js!'
      }
    },
    props: ['isworking']
  }
</script>
