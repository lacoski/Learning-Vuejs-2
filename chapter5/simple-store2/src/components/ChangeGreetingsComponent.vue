<template>
  <div>
    <input :value="msg" @keyup="changeMsg">
    <input :value="msg1" @keyup="changeTestMsg">
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      msg: 'getMessage',
      msg1: 'testMessage',
    }),
    methods: {
      changeMsg(ev) {
        this.$store.commit('changeMessage', ev.target.value)
      },
      changeTestMsg(ev) {
        this.$store.commit('testMessage', ev.target.value)
      },
    }
  }
</script>
