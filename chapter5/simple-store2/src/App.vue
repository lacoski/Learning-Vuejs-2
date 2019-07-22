<template>
  <div>
    <change-greetings-component></change-greetings-component>
    <show-greetings-component></show-greetings-component>
    <test-store-component></test-store-component>
  </div>
</template>

<script>
  import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
  import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
  import TestStoreComponent from './components/TestStoreComponent.vue'
  import store from './vuex/store'

  export default {
    components: {ShowGreetingsComponent, ChangeGreetingsComponent, TestStoreComponent},
    store
  }
</script>
